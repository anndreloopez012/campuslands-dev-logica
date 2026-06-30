const fs = require("fs");
const path = require("path");

const issueBody = process.env.ISSUE_BODY || "";
const issueNumber = process.env.ISSUE_NUMBER || "0";
const issueAuthor = (process.env.ISSUE_AUTHOR || "").toLowerCase();
const dataDir = process.env.DATA_DIR || ".";
const statusPath = path.join(dataDir, ".ingest-status.md");

function setOutput(name, value) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
}

function writeStatus(message) {
  fs.writeFileSync(statusPath, message);
}

function fail(message) {
  setOutput("valid", "false");
  writeStatus(`## Resultado rechazado\n\n${message}\n\nCorrige el resultado desde Logic Arena y vuelve a usar el boton **Subir al ranking global**.`);
  process.exit(0);
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractJson(body) {
  const fenced = body.match(/```json\s*([\s\S]*?)```/i);
  const raw = fenced ? fenced[1] : body;
  return JSON.parse(raw);
}

function readDb(dbPath) {
  if (!fs.existsSync(dbPath)) {
    return { updatedAt: null, results: [] };
  }
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

let result;
try {
  result = extractJson(issueBody);
} catch (error) {
  fail(`No se encontro un JSON valido en el issue. Detalle: \`${error.message}\`.`);
}

const user = slugify(result.user);
if (!/^[a-z0-9-]{2,39}$/.test(user)) {
  fail("El usuario de GitHub del resultado no tiene un formato valido.");
}

if (user !== issueAuthor) {
  fail(`El usuario del resultado \`${user}\` no coincide con quien envio el issue \`${issueAuthor}\`. Esto evita subir puntajes a nombre de otra persona.`);
}

if (!/^logic-\d+$/.test(String(result.id || ""))) {
  fail("El identificador del intento no es valido.");
}

if (!["facil", "intermedio", "dificil", "experto", "ultra"].includes(result.levelKey)) {
  fail("El nivel del resultado no es valido.");
}

if (!Array.isArray(result.answers) || result.answers.length < 10 || result.answers.length > 15) {
  fail("La cantidad de respuestas no coincide con una prueba valida.");
}

const calculatedScore = result.answers.reduce((sum, answer) => sum + Number(answer.points || 0), 0);
const calculatedMaxScore = result.answers.reduce((sum, answer) => sum + Number(answer.maxPoints || 0), 0);
const calculatedCorrect = result.answers.filter((answer) => Boolean(answer.ok)).length;

if (calculatedScore !== Number(result.score) || calculatedMaxScore !== Number(result.maxScore) || calculatedCorrect !== Number(result.correct)) {
  fail("El puntaje no coincide con el detalle de respuestas. El resultado parece modificado o incompleto.");
}

if (Number(result.total) !== result.answers.length) {
  fail("El total de preguntas no coincide con el detalle de respuestas.");
}

const safeResult = {
  id: String(result.id),
  user,
  levelKey: result.levelKey,
  level: String(result.level || result.levelKey),
  startedAt: String(result.startedAt || ""),
  finishedAt: String(result.finishedAt || new Date().toISOString()),
  secondsUsed: Number(result.secondsUsed || 0),
  score: calculatedScore,
  maxScore: calculatedMaxScore,
  percent: calculatedMaxScore > 0 ? Math.round((calculatedScore / calculatedMaxScore) * 100) : 0,
  correct: calculatedCorrect,
  total: result.answers.length,
  source: "repo",
  submittedBy: issueAuthor,
  submittedAt: new Date().toISOString(),
  issue: Number(issueNumber),
  answers: result.answers.map((answer) => ({
    id: String(answer.id || ""),
    title: String(answer.title || ""),
    detail: String(answer.detail || ""),
    selected: answer.selected === null || answer.selected === undefined ? null : String(answer.selected),
    expected: String(answer.expected || ""),
    points: Number(answer.points || 0),
    maxPoints: Number(answer.maxPoints || 0),
    explanation: String(answer.explanation || ""),
    ok: Boolean(answer.ok)
  }))
};

const resultDir = path.join(dataDir, "resultados", user);
const dbDir = path.join(dataDir, "practica-logica", "data");
const resultPath = path.join(resultDir, `${safeResult.id}.json`);
const dbPath = path.join(dbDir, "results.json");

fs.mkdirSync(resultDir, { recursive: true });
fs.mkdirSync(dbDir, { recursive: true });
fs.writeFileSync(resultPath, `${JSON.stringify(safeResult, null, 2)}\n`);

const db = readDb(dbPath);
const withoutDuplicate = (db.results || []).filter((item) => !(item.user === safeResult.user && item.id === safeResult.id));
const results = [safeResult, ...withoutDuplicate]
  .sort((a, b) => new Date(b.finishedAt).getTime() - new Date(a.finishedAt).getTime())
  .slice(0, 1000);

fs.writeFileSync(dbPath, `${JSON.stringify({ updatedAt: new Date().toISOString(), results }, null, 2)}\n`);

setOutput("valid", "true");
writeStatus([
  "## Resultado aceptado",
  "",
  `El intento de \`${safeResult.user}\` fue guardado en la base de datos Git.`,
  "",
  `- Nivel: ${safeResult.level}`,
  `- Puntaje: ${safeResult.score}/${safeResult.maxScore}`,
  `- Rendimiento: ${safeResult.percent}%`,
  `- Correctas: ${safeResult.correct}/${safeResult.total}`,
  "",
  "El ranking global se actualizara cuando GitHub Pages y el cache publico entreguen el nuevo JSON."
].join("\n"));

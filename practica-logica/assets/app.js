const REPO_URL = "https://github.com/anndreloopez012/campuslands-dev-logica";
const STORAGE_KEY = "campuslands.logicArena.results";

const LEVELS = {
  facil: {
    label: "Facil",
    questions: 10,
    minutes: 12,
    points: 8,
    description: "Patrones, comparaciones, operaciones cortas y lectura precisa."
  },
  intermedio: {
    label: "Intermedio",
    questions: 11,
    minutes: 16,
    points: 10,
    description: "Secuencias, filtros, porcentajes y decisiones con dos condiciones."
  },
  dificil: {
    label: "Dificil",
    questions: 12,
    minutes: 22,
    points: 12,
    description: "Casos con varias reglas, rutas logicas y calculos combinados."
  },
  experto: {
    label: "Experto",
    questions: 14,
    minutes: 30,
    points: 14,
    description: "Optimizacion, deduccion, validaciones encadenadas y estrategia."
  },
  ultra: {
    label: "Ultra experto",
    questions: 15,
    minutes: 40,
    points: 16,
    description: "Problemas densos con varias capas de razonamiento y descarte."
  }
};

const state = {
  bank: {},
  current: null,
  index: 0,
  answers: [],
  remaining: 0,
  timerId: null,
  lastReport: ""
};

const $ = (selector) => document.querySelector(selector);

function optionSet(correct, distractors) {
  const values = [correct, ...distractors]
    .map(String)
    .filter((value, index, arr) => arr.indexOf(value) === index);

  let pad = 1;
  while (values.length < 4) {
    values.push(String(Number(correct) + pad));
    pad += 1;
  }

  return shuffle(values.slice(0, 4)).map((text) => ({
    text,
    correct: text === String(correct)
  }));
}

function makeQuestion(level, id, title, detail, correct, distractors, explanation, points) {
  return {
    id: `${level}-${String(id).padStart(3, "0")}`,
    level,
    title,
    detail,
    options: optionSet(correct, distractors),
    answer: String(correct),
    explanation,
    points
  };
}

function buildBank() {
  Object.keys(LEVELS).forEach((level, levelIndex) => {
    const questions = [];
    const base = levelIndex + 1;
    const points = LEVELS[level].points;

    for (let i = 1; i <= 10; i += 1) {
      const start = 3 + base + i;
      const step = base + 2;
      const hidden = start + (step * 4);
      questions.push(makeQuestion(
        level,
        questions.length + 1,
        `Secuencia de ranking #${i}`,
        `Un ranking de jugadores sube con diferencia constante: ${start}, ${start + step}, ${start + (step * 2)}, ${start + (step * 3)}, ?. Elige el siguiente valor.`,
        hidden,
        [hidden - step, hidden + step, hidden + base + i],
        `La diferencia entre cada posicion es ${step}. Se suma una vez mas al ultimo valor visible.`,
        points
      ));
    }

    for (let i = 1; i <= 10; i += 1) {
      const wins = 2 + i + base;
      const draws = (i % 4) + base;
      const penalties = Math.floor((i + base) / 3);
      const total = wins * 3 + draws - penalties;
      questions.push(makeQuestion(
        level,
        questions.length + 1,
        `Tabla de torneo #${i}`,
        `Un equipo de futbol sala registra ${wins} victorias, ${draws} empates y ${penalties} sanciones. Victoria vale 3, empate vale 1 y cada sancion resta 1. Calcula el puntaje final.`,
        total,
        [total + 3, total - 2, wins + draws + penalties],
        `Multiplica victorias por 3, suma empates y resta sanciones: ${wins}*3 + ${draws} - ${penalties}.`,
        points
      ));
    }

    for (let i = 1; i <= 10; i += 1) {
      const rpm = 6000 + i * 350 + base * 200;
      const temp = 74 + i + base * 2;
      const vibration = (i + base) % 5;
      const safe = rpm <= 9200 && temp <= 96 && vibration <= 3;
      questions.push(makeQuestion(
        level,
        questions.length + 1,
        `Diagnostico de moto #${i}`,
        `Una moto marca ${rpm} RPM, ${temp} grados y vibracion ${vibration}/4. La regla segura es RPM <= 9200, temperatura <= 96 y vibracion <= 3. Que estado corresponde?`,
        safe ? "segura" : "revisar",
        safe ? ["revisar", "critica", "apagada"] : ["segura", "normal", "lista"],
        `Todas las condiciones deben cumplirse. Si una falla, la moto debe revisarse antes de correr.`,
        points
      ));
    }

    for (let i = 1; i <= 10; i += 1) {
      const common = 2 + base;
      const rare = 5 + i;
      const epic = 9 + base + (i % 3);
      const total = common * 2 + rare * 5 + epic * 10;
      questions.push(makeQuestion(
        level,
        questions.length + 1,
        `Inventario RPG #${i}`,
        `Tu personaje tiene ${common} items comunes, ${rare} raros y ${epic} epicos. Comun vale 2, raro vale 5 y epico vale 10. Cual es el poder total del inventario?`,
        total,
        [total - 10, total + 5, common + rare + epic],
        `Se calcula por pesos: comunes*2 + raros*5 + epicos*10.`,
        points
      ));
    }

    for (let i = 1; i <= 10; i += 1) {
      const distance = 120 + i * 18 + base * 20;
      const fuel = 8 + base + (i % 5);
      const efficiency = Math.round(distance / fuel);
      questions.push(makeQuestion(
        level,
        questions.length + 1,
        `Ruta de auto #${i}`,
        `Un auto recorre ${distance} km usando ${fuel} galones. Redondeando al entero mas cercano, cuantos km por galon hizo?`,
        efficiency,
        [efficiency - 2, efficiency + 3, Math.round(fuel / distance)],
        `Divide distancia entre galones y redondea: ${distance}/${fuel}.`,
        points
      ));
    }

    for (let i = 1; i <= 10; i += 1) {
      const a = base + i;
      const b = 2 * i + base;
      const c = 3 * base + i;
      const result = (a + b) * c - b;
      questions.push(makeQuestion(
        level,
        questions.length + 1,
        `Formula de laboratorio #${i}`,
        `Para una mezcla se aplica la formula (A + B) * C - B. Si A=${a}, B=${b}, C=${c}, cual es el resultado?`,
        result,
        [result + b, result - c, a + b + c],
        `Respeta prioridad: primero parentesis, luego multiplicacion y al final resta.`,
        points
      ));
    }

    state.bank[level] = questions;
  });
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function slugify(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function renderLevels() {
  const grid = $("#levelGrid");
  const select = $("#levelSelect");
  grid.innerHTML = "";
  select.innerHTML = "";

  Object.entries(LEVELS).forEach(([key, level]) => {
    const card = document.createElement("article");
    card.className = "level-card";
    card.innerHTML = `
      <h3>${level.label}</h3>
      <p>${level.description}</p>
      <div class="level-meta">
        <span>${level.questions} preguntas por prueba</span>
        <span>${level.minutes} minutos de tiempo</span>
        <span>60 variantes disponibles</span>
      </div>
      <button class="button ghost" type="button" data-level="${key}">Practicar nivel</button>
    `;
    grid.appendChild(card);

    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${level.label} - ${level.questions} preguntas`;
    select.appendChild(option);
  });

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level]");
    if (!button) return;
    $("#levelSelect").value = button.dataset.level;
    $("#prueba").scrollIntoView({ behavior: "smooth", block: "start" });
    $("#githubUser").focus();
  });
}

function startQuiz(event) {
  event.preventDefault();
  const user = slugify($("#githubUser").value);
  const levelKey = $("#levelSelect").value;
  const level = LEVELS[levelKey];

  if (!user) {
    $("#githubUser").focus();
    return;
  }

  const questions = shuffle(state.bank[levelKey]).slice(0, level.questions);
  state.current = {
    id: `logic-${Date.now()}`,
    user,
    levelKey,
    level: level.label,
    startedAt: new Date().toISOString(),
    questions
  };
  state.index = 0;
  state.answers = Array.from({ length: questions.length }, () => null);
  state.remaining = level.minutes * 60;

  $("#setupPanel").classList.add("hidden");
  $("#resultsPanel").classList.add("hidden");
  $("#quizPanel").classList.remove("hidden");
  $("#quizMeta").textContent = `${user} / ${questions.length} preguntas`;
  $("#quizTitle").textContent = `Nivel ${level.label}`;

  clearInterval(state.timerId);
  state.timerId = setInterval(tickTimer, 1000);
  renderQuestion();
}

function tickTimer() {
  state.remaining -= 1;
  $("#timer").textContent = formatTime(Math.max(state.remaining, 0));
  if (state.remaining <= 0) {
    finishQuiz();
  }
}

function renderQuestion() {
  const question = state.current.questions[state.index];
  const total = state.current.questions.length;
  const selected = state.answers[state.index];
  const answeredPoints = state.current.questions.reduce((sum, item, index) => {
    return sum + (state.answers[index] === item.answer ? item.points : 0);
  }, 0);

  $("#timer").textContent = formatTime(Math.max(state.remaining, 0));
  $("#questionCounter").textContent = `Pregunta ${state.index + 1} de ${total}`;
  $("#scorePreview").textContent = `${answeredPoints} pts marcados`;
  $("#progressBar").style.width = `${((state.index + 1) / total) * 100}%`;
  $("#questionPoints").textContent = `${question.points} pts`;
  $("#questionText").textContent = question.title;
  $("#questionDetail").textContent = question.detail;

  const options = $("#optionsList");
  options.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = `button option${selected === option.text ? " selected" : ""}`;
    button.type = "button";
    button.textContent = option.text;
    button.addEventListener("click", () => {
      state.answers[state.index] = option.text;
      renderQuestion();
    });
    options.appendChild(button);
  });

  $("#prevQuestion").disabled = state.index === 0;
  $("#nextQuestion").classList.toggle("hidden", state.index === total - 1);
  $("#finishQuiz").classList.toggle("hidden", state.index !== total - 1);
}

function moveQuestion(direction) {
  const next = state.index + direction;
  if (next < 0 || next >= state.current.questions.length) return;
  state.index = next;
  renderQuestion();
}

function finishQuiz() {
  if (!state.current) return;
  clearInterval(state.timerId);

  const finishedAt = new Date().toISOString();
  const maxScore = state.current.questions.reduce((sum, question) => sum + question.points, 0);
  const score = state.current.questions.reduce((sum, question, index) => {
    return sum + (state.answers[index] === question.answer ? question.points : 0);
  }, 0);
  const correct = state.current.questions.filter((question, index) => state.answers[index] === question.answer).length;
  const result = {
    ...state.current,
    finishedAt,
    secondsUsed: (LEVELS[state.current.levelKey].minutes * 60) - Math.max(state.remaining, 0),
    score,
    maxScore,
    correct,
    total: state.current.questions.length,
    answers: state.current.questions.map((question, index) => ({
      id: question.id,
      title: question.title,
      detail: question.detail,
      selected: state.answers[index],
      expected: question.answer,
      points: state.answers[index] === question.answer ? question.points : 0,
      maxPoints: question.points,
      explanation: question.explanation,
      ok: state.answers[index] === question.answer
    }))
  };

  saveResult(result);
  state.lastReport = buildMarkdown(result);
  renderResults(result);
}

function renderResults(result) {
  $("#quizPanel").classList.add("hidden");
  $("#resultsPanel").classList.remove("hidden");
  $("#setupPanel").classList.remove("hidden");

  const percent = Math.round((result.score / result.maxScore) * 100);
  $("#resultTitle").textContent = `Resultado de ${result.user}`;
  $("#resultSummary").innerHTML = `
    <div><strong>${result.score}/${result.maxScore}</strong><span> puntos</span></div>
    <div><strong>${result.correct}/${result.total}</strong><span> correctas</span></div>
    <div><strong>${percent}%</strong><span> rendimiento</span></div>
    <div><strong>${formatTime(result.secondsUsed)}</strong><span> tiempo usado</span></div>
  `;

  const list = $("#reviewList");
  list.innerHTML = "";
  result.answers.forEach((answer, index) => {
    const item = document.createElement("article");
    item.className = `review-item ${answer.ok ? "correct" : "wrong"}`;
    item.innerHTML = `
      <h3>${index + 1}. ${answer.title}</h3>
      <p>${answer.detail}</p>
      <p><strong>Tu respuesta:</strong> ${answer.selected ?? "sin responder"} | <strong>Correcta:</strong> ${answer.expected}</p>
      <p><strong>Puntos:</strong> ${answer.points}/${answer.maxPoints}</p>
      <p>${answer.explanation}</p>
    `;
    list.appendChild(item);
  });

  renderHistory();
}

function saveResult(result) {
  const previous = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  previous.unshift(result);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(previous.slice(0, 20)));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const list = $("#historyList");
  list.innerHTML = "";

  if (history.length === 0) {
    list.innerHTML = "<p class=\"microcopy\">Aun no hay intentos guardados en este navegador.</p>";
    return;
  }

  history.forEach((result) => {
    const item = document.createElement("article");
    item.className = "history-item";
    item.innerHTML = `
      <h3>${result.user} / ${result.level}</h3>
      <p>${new Date(result.finishedAt).toLocaleString()} - ${result.score}/${result.maxScore} pts - ${result.correct}/${result.total} correctas</p>
    `;
    list.appendChild(item);
  });
}

function buildMarkdown(result) {
  const lines = [
    `# Resultado Logic Arena - ${result.user}`,
    "",
    `- Usuario GitHub: ${result.user}`,
    `- Nivel: ${result.level}`,
    `- Inicio: ${result.startedAt}`,
    `- Finalizacion: ${result.finishedAt}`,
    `- Tiempo usado: ${formatTime(result.secondsUsed)}`,
    `- Puntaje: ${result.score}/${result.maxScore}`,
    `- Correctas: ${result.correct}/${result.total}`,
    "",
    "## Revisión",
    ""
  ];

  result.answers.forEach((answer, index) => {
    lines.push(`### ${index + 1}. ${answer.title}`);
    lines.push("");
    lines.push(`- Estado: ${answer.ok ? "Correcta" : "Incorrecta"}`);
    lines.push(`- Respuesta enviada: ${answer.selected ?? "sin responder"}`);
    lines.push(`- Respuesta correcta: ${answer.expected}`);
    lines.push(`- Puntos: ${answer.points}/${answer.maxPoints}`);
    lines.push(`- Explicacion: ${answer.explanation}`);
    lines.push("");
  });

  lines.push("## Entrega sugerida");
  lines.push("");
  lines.push(`Guardar este archivo en \`resultados/${result.user}/${result.id}.md\`.`);
  lines.push(`Repositorio: ${REPO_URL}`);
  return lines.join("\n");
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function latestResult() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")[0] || null;
}

function wireEvents() {
  $("#setupForm").addEventListener("submit", startQuiz);
  $("#prevQuestion").addEventListener("click", () => moveQuestion(-1));
  $("#nextQuestion").addEventListener("click", () => moveQuestion(1));
  $("#clearAnswer").addEventListener("click", () => {
    state.answers[state.index] = null;
    renderQuestion();
  });
  $("#finishQuiz").addEventListener("click", finishQuiz);
  $("#newAttempt").addEventListener("click", () => {
    $("#resultsPanel").classList.add("hidden");
    $("#setupPanel").classList.remove("hidden");
    $("#prueba").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#downloadMarkdown").addEventListener("click", () => {
    const result = latestResult();
    if (!result) return;
    downloadFile(`${result.id}.md`, buildMarkdown(result), "text/markdown;charset=utf-8");
  });
  $("#downloadJson").addEventListener("click", () => {
    const result = latestResult();
    if (!result) return;
    downloadFile(`${result.id}.json`, JSON.stringify(result, null, 2), "application/json;charset=utf-8");
  });
  $("#copyReport").addEventListener("click", async () => {
    const result = latestResult();
    if (!result) return;
    await navigator.clipboard.writeText(buildMarkdown(result));
    $("#copyReport").textContent = "Reporte copiado";
    setTimeout(() => {
      $("#copyReport").textContent = "Copiar reporte";
    }, 1600);
  });
}

buildBank();
renderLevels();
renderHistory();
wireEvents();

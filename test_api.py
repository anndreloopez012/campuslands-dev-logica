import json
import urllib.request
import urllib.parse
import ssl

API_KEY = "YOUR_API_KEY"

def test_api():
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={API_KEY}"
    headers = {'Content-Type': 'application/json'}
    data = {
        "contents": [{"parts": [{"text": "Hello"}]}],
    }
    # Create an unverified context to avoid SSL cert issues just in case, though it shouldn't be needed usually
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    req = urllib.request.Request(url, headers=headers, data=json.dumps(data).encode('utf-8'))
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            res_body = response.read()
            print("SUCCESS:")
            print(res_body.decode('utf-8'))
    except Exception as e:
        print(f"Error: {e}")
        if hasattr(e, 'read'):
            print(e.read().decode('utf-8'))

test_api()

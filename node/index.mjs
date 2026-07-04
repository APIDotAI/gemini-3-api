const API_KEY = process.env.APIDOT_API_KEY;
const BASE_URL = process.env.APIDOT_BASE_URL || "https://api.apidot.ai";

if (!API_KEY) {
  console.error("Set APIDOT_API_KEY before running this example.");
  process.exit(1);
}

const payload = {
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Write a concise launch checklist for a developer API that supports native Gemini requests."
        }
      ]
    }
  ],
  "systemInstruction": {
    "parts": [
      {
        "text": "You are a concise technical assistant."
      }
    ]
  },
  "generationConfig": {
    "temperature": 1,
    "maxOutputTokens": 1024,
    "topP": 0.95,
    "topK": 40
  }
};

async function requestJson(url, options) {
  const response = await fetch(url, options);
  const text = await response.text();
  const body = text ? JSON.parse(text) : null;
  if (!response.ok || body?.code >= 400) {
    throw new Error("APIDot request failed: " + JSON.stringify(body));
  }
  return body;
}

async function main() {
  const result = await requestJson(BASE_URL + "/v1beta/models/gemini-3-flash-preview:generateContent", {
    method: "POST",
    headers: { Authorization: "Bearer " + API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => { console.error(error); process.exit(1); });

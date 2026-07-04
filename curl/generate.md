# Gemini 3 Series cURL Quickstart

## What this example shows

This example shows how to call Gemini 3 Series through APIDot with a server-side API key.

## Requirements

- An APIDot account.
- An APIDot API key stored server-side.
- `curl` installed locally.
- A backend or terminal environment that does not expose API keys to browser code.

## Environment variables

Use placeholders only. Do not commit real credentials.

```env
APIDOT_API_KEY=YOUR_API_KEY_HERE
```

## How to run

This native API request does not use callback_url.

```bash
export APIDOT_API_KEY="YOUR_API_KEY_HERE"

curl --fail-with-body --request POST \
  --url https://api.apidot.ai/v1beta/models/gemini-3-flash-preview:generateContent \
  --header "Authorization: Bearer $APIDOT_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
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
}'
```

## Request variants

### gemini-3-flash-preview

```json
{
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
}
```

### gemini-3-pro-preview

```json
{
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Review this API integration plan and identify the highest-risk missing checks before production launch."
        }
      ]
    }
  ],
  "systemInstruction": {
    "parts": [
      {
        "text": "You are a senior API integration reviewer. Be specific and concise."
      }
    ]
  },
  "generationConfig": {
    "temperature": 0.8,
    "maxOutputTokens": 2048,
    "topP": 0.95,
    "topK": 40
  }
}
```

## Expected response

```json
{
  "code": 200,
  "data": {
    "candidates": [
      {
        "content": {
          "parts": [
            {
              "text": "Generated response text appears here."
            }
          ]
        }
      }
    ],
    "usageMetadata": {
      "promptTokenCount": 42,
      "candidatesTokenCount": 120,
      "totalTokenCount": 162
    }
  }
}
```

## Production notes

- Keep APIDot API keys on the server side only.
- Store selected model, request payload, user ID, and response metadata together for support and retries.
- Read generated content from `data` and persist usage metadata for cost review.

## Common mistakes

- Committing a real API key or `.env` file.
- Calling APIDot directly from browser code.
- Reusing request fields from a different model without checking this model's docs.

## Related links

- Website: https://apidot.ai
- Docs: https://apidot.ai/docs
- Gemini 3 Series docs: https://apidot.ai/docs/gemini-3
- Gemini 3 Series model page: https://apidot.ai/models/gemini-3
- GitHub: https://github.com/APIDotAI
- Examples: https://github.com/APIDotAI/apidot-examples

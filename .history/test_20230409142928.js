import * as openai from "openai"

const configuration = {
  apiKey: "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",
}

openai.apiKey = configuration.apiKey

const test = async () => {
  try {
    const response = await openai.Completion.create({
      model: "text-davinci-002", // Update the model version
      prompt: "Say this is a test",
      max_tokens: 100,
      temperature: 0.5,
    })
    console.log("response", response.data)

    return response.data
  } catch (e) {
    console.error("Error details:", e.response.data)
    console.error("Full error object:", e)
    return e
  }
}

test()

// curl https://api.openai.com/v1/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer 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" \
//   -d '{
//     "model": "text-davinci-003",
//     "prompt": "Say this is a test",
//     "max_tokens": 7,
//     "temperature": 0
//   }'

import openai from "openai"

const configuration = {
  apiKey: "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",
}

openai.apiKey = configuration.apiKey

const test = async () => {
  try {
    const response = await openai.Completion.create({
      engine: "text-davinci-003",
      prompt: `hello`,
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

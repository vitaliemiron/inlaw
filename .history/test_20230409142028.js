import OpenApi from "openai"

const configuration = new OpenApi.Configuration({
  apiKey: "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",
})

const openai = new OpenApi.OpenAIApi(configuration)

const test = async () => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `hello`,
      max_tokens: 100,
      temperature: 0.5,
    })
    console.log("response", response)

    return response
  } catch (e) {
    console.log(e)
    return e
  }
}

test()

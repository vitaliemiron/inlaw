import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: "INLAW",
  apiKey: "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",
})

const openai = new OpenAIApi(configuration)

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

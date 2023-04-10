import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: "INLAW",
  apiKey: "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",
})

const openai = new OpenAIApi(configuration)

type Args = {
  message: string
}

export default async function SendMessage({ message }: Args) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    })

    return response
  } catch (e) {
    return e
  }
}

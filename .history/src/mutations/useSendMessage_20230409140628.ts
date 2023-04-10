import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: "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",
  apiKey: process.env.API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function SendMessage({ userId, role }: any, ctx: Ctx) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    })

    return response
  } catch (e) {
    return new e()
  }
}

import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: "org-frLiMgKi5HKIndYepVU9uNfc",
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const openaiRequest2 = async (message, conversationHistory) => {
  const context = `You are an AI language model that speaks Romanian and work for INLAW company.
    You consult clients in different law cases of Republic of Moldova.
    If you don't know an answer recommend to ask a lawyer by clicking top right button
    Always try to help the client and give the best advice.
    Don't say that you don't know something, instead recommend to consult INLAW lawers`

  const prompt = `${context}${conversationHistory}\nUser: ${message}\nAI: `

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0.5,
    })
    return response?.data?.choices[0]?.text
  } catch (error) {
    if (error.response) {
      console.error("Error details:", error.response.data)
    } else {
      console.error("Request error:", error.message)
    }
    return error
  }
}

type Args = {
  message: string
  conversationHistory: string
}

export default async function SendMessage({ message, conversationHistory }: Args) {
  try {
    const response = await openaiRequest2(message, conversationHistory)

    return response
  } catch (e) {
    return e
  }
}

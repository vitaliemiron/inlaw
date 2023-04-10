import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: "org-frLiMgKi5HKIndYepVU9uNfc",
  apiKey: process.env.OPENAI_API_KEY,
})

const axios = require("axios")
const openai = new OpenAIApi(configuration)

const openaiRequest2 = async (message) => {
  const context =
    "You are an AI language model that speaks Romanian and work for INLAW company. \n
    You consult clients in different law cases of Republic of Moldova. \n
    If you don't know an answer recommend to ask a lawyer by clicking top right button \n
    Always try to help the client and give the best advice. \n
    Don't say that you don't know something, instead recommend to consult INLAW lawers"

  const prompt = `${context}\nUser: ${message}\nAI: `

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
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
}

export default async function SendMessage({ message }: Args) {
  try {
    const response = await openaiRequest2(message)

    return response
  } catch (e) {
    return e
  }
}

// const openaiRequest = async (message) => {
//   const apiKey = "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"
//   const url = "https://api.openai.com/v1/completions"

//   const data = {
//     model: "text-davinci-003",
//     prompt: message,
//     max_tokens: 7,
//     temperature: 0,
//   }

//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//   }

//   try {
//     const response = await axios.post(url, data, config)
//     console.log("response", response.data)
//     return response.data
//   } catch (error) {
//     if (error.response) {
//       console.error("Error details:", error.response.data)
//     } else {
//       console.error("Request error:", error.message)
//     }
//     return error
//   }
// }

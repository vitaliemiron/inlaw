import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  organization: "org-frLiMgKi5HKIndYepVU9uNfc",
  apiKey: process.env.OPENAI_API_KEY,
})

const axios = require("axios")

const openaiRequest = async (message) => {
  const apiKey = "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"
  const url = "https://api.openai.com/v1/completions"

  const data = {
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 7,
    temperature: 0,
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  }

  try {
    const response = await axios.post(url, data, config)
    console.log("response", response.data)
    return response.data
  } catch (error) {
    if (error.response) {
      console.error("Error details:", error.response.data)
    } else {
      console.error("Request error:", error.message)
    }
    return error
  }
}

const openaiRequest2 = async (message) => {
  const data = {
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 7,
    temperature: 0,
  }

  try {
    const response = await openai.Completions.create(data)
    console.log("response", response)
    return response
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

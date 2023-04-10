import { Configuration, OpenAIApi } from "openai"

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

type Args = {
  message: string
}

export default async function SendMessage({ message }: Args) {
  try {
    const response = await openaiRequest(message)

    return response
  } catch (e) {
    return e
  }
}

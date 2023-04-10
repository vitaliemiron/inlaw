const axios = require("axios")

const openaiRequest = async () => {
  const apiKey = "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"
  const url = "https://api.openai.com/v1/completions"

  const data = {
    model: "text-davinci-003",
    prompt: "Say this is a test",
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
    console.error("Error details:", error.response.data)
    console.error("Full error object:", error)
    return error
  }
}

openaiRequest()

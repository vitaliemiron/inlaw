import React from "react"
import { useState } from "react"
import { IconButton } from "@mui/material"
import { SendIcon } from "@mui/icons-material"

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    if (value === "") return
    sendMessage({ sender: "user", message: value })
    setValue("")
  }
  return (
    <div
      className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4
    py-4 overflow-auto relative"
    >
      {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit()
            }}
            rows={1}
            className="border-0 bg-transparent outline-none w-11/12"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <IconButton color="primary" onClick={handleSubmit}>
            <SendIcon />
          </IconButton>
        </>
      )}
    </div>
  )
}

export default ChatInput

import { useState, useEffect, useRef } from "react"
import ChatBody from "./ChatBody"
import ChatInput from "./ChatInput"
import { useMutation } from "@blitzjs/rpc"
import useSendMessage from "src/mutations/useSendMessage"

import React from "react"
import { styled } from "@mui/system"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import Fab from "@mui/material/Fab"
import SendIcon from "@mui/icons-material/Send"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import { useForm } from "react-hook-form"
import { CircularProgress } from "@mui/material"

const getCurrentTime = () => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  const currentMinutes = currentDate.getMinutes()
  return `${currentHour}:${currentMinutes}`
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  minHeight: "40vh",
}))

const useStyles = {
  table: {
    minWidth: 650,
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "30vh",
    overflowY: "auto",
  },
}

type Sender = "guest" | "bot"

type Message = {
  text: string
  sender: Sender
  time: string
}

const defaultMessage: Message = {
  sender: "bot",
  text: "Salut, cu ce te putea ajuta?",
  time: getCurrentTime(),
}

const Chat = () => {
  const [chat, setChat] = useState<Message[]>([defaultMessage])
  const { register, handleSubmit, setValue } = useForm()
  const [sendMessageMutation, { isLoading }] = useMutation(useSendMessage)
  const messageListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }
  }, [chat])

  const sendMessage = async (message: string) => {
    console.log("message", message)

    const userMessage = {
      sender: "guest" as Sender,
      text: message,
      time: getCurrentTime(),
    }

    setChat((prev) => [...prev, userMessage])

    const chatHistory = chat
      .map((m) => {
        if (m.sender === "guest") {
          return `User: ${m.text}\n`
        } else {
          return `AI: ${m.text}\n`
        }
      })
      .join("")

    const rs = await sendMessageMutation(
      { message: message, conversationHistory: chatHistory },
      {
        onSuccess: (data: string) => {
          setChat((prev) => [
            ...prev,
            { sender: "bot", text: data.replace(/^User:\s*/, ""), time: getCurrentTime() },
          ])
        },
      }
    )
  }

  const onSubmit = (data) => {
    void sendMessage(data.message)
    setValue("message", "")
  }

  return (
    <div id="chat">
      <Grid container component={StyledPaper}>
        <Grid item xs={3} sx={useStyles.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
              </ListItemIcon>
              <ListItemText primary="John Wick" />
              <ListItemText secondary={<Typography align="right">online</Typography>} />
            </ListItem>
          </List>
          <Divider />
        </Grid>
        <Grid item xs={9}>
          <List sx={useStyles.messageArea} ref={messageListRef}>
            {chat.map((message, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      primary={
                        <Typography
                          align={message.sender === "bot" ? "left" : "right"}
                          color="green"
                        >
                          {message.sender === "bot" ? "Consultant Juridic" : "Guest"}
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      primary={
                        <Typography align={message.sender === "bot" ? "left" : "right"}>
                          {message.text}
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText
                      secondary={
                        <Typography align={message.sender === "bot" ? "left" : "right"}>
                          {message.time}
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Divider />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  fullWidth
                  autoComplete="off"
                  {...register("message")}
                />
              </Grid>
              <Grid item xs={1}>
                {isLoading ? (
                  <CircularProgress size={68} />
                ) : (
                  <Fab color="primary" aria-label="add">
                    <SendIcon />
                  </Fab>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default Chat

// function Chat2() {
//   const [chat, setChat] = useState<string[]>([])

// const [sendMessageMutation] = useMutation(useSendMessage)

//   const sendMessage = async (message: any) => {
//     setChat((prev) => [...prev, message])
//     // mutation.mutate();

// const rs = await sendMessageMutation(
//   { message: message.message },
//   {
//     onSuccess: (data: string) => {
//       // @ts-ignore ignore
//       setChat((prev) => [...prev, { sender: "ai", message: data.replace(/^\n\n/, "") }])
//     },
//   }
// )

//     console.log("here", rs)
//   }

//   return (
//     <div className="bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">
//       {/* gradients */}
//       <div className="gradient-01 z-0 absolute"></div>
//       <div className="gradient-02 z-0 absolute"></div>

//       {/* header */}
//       <div className="uppercase font-bold  text-2xl text-center mb-3">Consultant Juridic</div>

//       {/* body */}
//       <div
//         className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
//       scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
//       "
//       >
//         <ChatBody chat={chat} />
//       </div>

//       {/* input */}
//       <div className="w-full max-w-4xl min-w-[20rem] self-center">
//         <ChatInput sendMessage={sendMessage} loading={false} />
//       </div>
//     </div>
//   )
// }

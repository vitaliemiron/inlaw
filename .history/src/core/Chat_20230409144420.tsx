import { useState } from "react"
import ChatBody from "./ChatBody"
import ChatInput from "./ChatInput"
import { useMutation } from "@blitzjs/rpc"
import useSendMessage from "src/mutations/useSendMessage"
// import { useMutation } from "react-query"
// import { fetchResponse } from "./api"

function Chat() {
  const [chat, setChat] = useState<string[]>([])

  const [sendMessageMutation] = useMutation(useSendMessage)

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetchResponse(chat);
  //   },
  //   onSuccess: (data) =>
  //     setChat((prev) => [
  //       ...prev,
  //       { sender: "ai", message: data.message.replace(/^\n\n/, "") },
  //     ]),
  // });

  const sendMessage = async (message: any) => {
    setChat((prev) => [...prev, message])
    // mutation.mutate();

    const rs = await sendMessageMutation(
      { message: message.message },
      {
        onSuccess: (data) => {
          // @ts-ignore ignore
          setChat((prev) => [
            ...prev,
            { sender: "ai", message: data?.choices[0].replace(/^\n\n/, "") },
          ])
        },
      }
    )

    console.log("here", rs)
  }

  return (
    <div className="bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">
      {/* gradients */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      {/* header */}
      <div className="uppercase font-bold  text-2xl text-center mb-3">Consultant Juridic</div>

      {/* body */}
      <div
        className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "
      >
        <ChatBody chat={chat} />
      </div>

      {/* input */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput sendMessage={sendMessage} loading={false} />
      </div>
    </div>
  )
}

export default Chat

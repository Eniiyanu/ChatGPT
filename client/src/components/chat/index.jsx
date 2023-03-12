import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header  from '@/components/customHeader'
const Chat = () => {

    const chatProps  = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "Enii",
        "Test"
    )
  return <div style={{flexBasis: "100%"}}>
  <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} 
        style={{height: "100vh", width: "100vw"}}
        renderChatHeader={(chat) => {<Header chat={chat} />}}
        renderMessageForm={(props)} =>  {
          return ( 
            <StandardMessageForm props={props} activeChat={chatProps.chat}/>
        ) }}
     />
  </div>;
  )
}

export default Chat
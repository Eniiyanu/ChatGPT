import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
const Chat = () => {

    const chatProps  = useMultiChatLogic(
        import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
        "Enii",
        "test"
    )
  return <div style={{flexBasis: "100%"}}>
  <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} />
  </div>;
  
}

export default Chat
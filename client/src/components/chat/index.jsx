import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
const Chat = () => {

    const { chatConfig, chatState, chatActions } = useMultiChatLogic(
        import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
    )
  return <div>Chat</div>;
  
}

export default Chat
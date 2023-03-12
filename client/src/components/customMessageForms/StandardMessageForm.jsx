import React from 'react'

const StandardMessageForm = () => {
  const [message, setMessage, sendMessage, activeChat] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");
  return (
    <div className='message-form-container'>

{preview && (
  <div className='message-form-preview'> 
    <img className='message-form-preview-image' src={preview} onLoad={() => URL.revokeObjectURL(preview)} alt='preview' />
  </div>
  )}
    </div>
  )
}

export default StandardMessageForm
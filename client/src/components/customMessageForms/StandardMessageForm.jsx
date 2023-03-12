import { XMarkIcon } from "@heroicons/react/24/solid";
import React, {useState} from "react";

const StandardMessageForm = () => {
  const [message, setMessage, sendMessage, activeChat] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
            alt="preview"
          />
          <XMarkIcon
            className="messsage-form-preview-x"
            onClick={() => {
              setPreview("");
              setAttachment("");
            }}
          />
        </div>
      )}
      <div className="message-form">
        <div>
          <imput
            className="message-form-input"
            type="text"
            value={message}
            onchange={handleChange}
            placeholder="Type a message..."
          />
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;

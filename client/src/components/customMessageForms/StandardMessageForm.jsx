import { XMarkIcon } from "@heroicons/react/24/solid";
import React, {useState} from "react";
import Dropzone from "react-dropzone";

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
            onChange={handleChange}
            placeholder="Type a message to be sent..."
          />
        </div>
        <div  className="message-form-icons">
          <Dropzone>
            acceptedFiles=".jpg,.jpeg,.png,.gif,.tiff"
            multiple={false}
            noClick={true}
            onDrop{ (acceptedFiles) => {
              setAttachment( acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;

import React from 'react';

function Message({ message, isRecieved }) {
    return (
        <div className={`message ${isRecieved ? 'message-received' : 'message-sent'}`}>
            <div className="message-sender">
                <span className='message-sender-span'>{message.sender}</span>: {message.content}
            </div>
        </div>
    );
}

export default Message;
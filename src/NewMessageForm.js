import React, { useState } from 'react';

function NewMessageForm({ onSendMessage }) {
    const [messageText, setMessageText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage(messageText);
        setMessageText('');
    };

    return (
        <form className="new-message-form" onSubmit={handleSubmit}>
            <input
                className="new-message-input"
                type="text"
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
                placeholder="Type your message..."
            />
            <button className="new-message-button" type="submit">Send</button>
        </form>
    );
}

export default NewMessageForm;
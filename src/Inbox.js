import React from 'react';
import Message from './Message.js';
import NewMessageForm from './NewMessageForm';

function Inbox({ inbox }) {
  const handleSendMessage = (messageText) => {
    // Implement logic to send the message to the server
    console.log('Sending message:', messageText);
  };

  return (
    <div className="conversation-details">
      <h2>{inbox.name}</h2>
      <div>
        {inbox.conversations.map((conversation) => (
          <div key={conversation.id}>
            {conversation.messages.map((message) => (
              <Message key={message.id} message={message} isRecieved={message.sender === 'Support'} />
            ))}
            <NewMessageForm onSendMessage={handleSendMessage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
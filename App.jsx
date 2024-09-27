import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InboxList from "./InboxList";
import Inbox from "./Inbox";

const inboxes = [
  { id: 1, name: "Unassigned" },
  { id: 2, name: "Open" },
  { id: 3, name: "Resolved" },
];

const messages = {
  1: [
    { id: 1, content: "Hi there! How can I help you today?" },
    { id: 2, content: "This is a new message in the Unassigned inbox." },
  ],
  2: [
    { id: 3, content: "Hello, I have a question about my order." },
    {
      id: 4,
      content: "Sure, I can help you with that. What is your order number?",
    },
  ],
  3: [
    {
      id: 5,
      content: "This is a resolved chat.",
      content: "It can be reopened if needed.",
    },
  ],
};

function App() {
  const [currentInbox, setCurrentInbox] = useState(null);

  const handleInboxClick = (inbox) => {
    setCurrentInbox(inbox);
  };

  return (
    <Router>
      <div className="app">
        <InboxList inboxes={inboxes} onClick={handleInboxClick} />
        <Inbox
          inbox={currentInbox}
          messages={messages[currentInbox?.id] || []}
        />
      </div>
    </Router>
  );
}

export default App;

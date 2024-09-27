import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InboxList from './InboxList';
import Inbox from './Inbox';
import axios from 'axios';
import "./App.css"

function App() {
  // const [inboxes, setInboxes] = useState([]);

  const inboxes = [
    {
      id: 1,
      name: 'Avadhesh',
      conversations: [
        {
          id: 1,
          messages: [
            { sender: 'Customer 1', content: 'Hello, I have a question about your product.' },
            { sender: 'Support', content: 'Hi there, how can I help you today?' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Vinish',
      conversations: [
        {
          id: 2,
          messages: [
            { sender: 'Custome', content: 'Hello, I have a question about your product.' },
            { sender: 'Support', content: 'Hi there, how can I help you today?' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Vinish',
      conversations: [
        {
          id: 2,
          messages: [
            { sender: 'Custome', content: 'Hello, I have a question about your product.' },
            { sender: 'Support', content: 'Hi there, how can I help you today?' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Vinish',
      conversations: [
        {
          id: 2,
          messages: [
            { sender: 'Custome', content: 'Hello, I have a question about your product.' },
            { sender: 'Support', content: 'Hi there, how can I help you today?' },
          ],
        },
      ],
    },
  ]

  // Fetch initial inboxes from the server
  // useEffect(() => {
  //   const fetchInboxes = async () => {
  //     const response = await axios.get('/api/inboxes');
  //     setInboxes(response.data);
  //   };
  //   fetchInboxes();
  // }, []);

  return (
    <Router>
      <div className="App">
        <InboxList inboxes={inboxes} />
        <Routes>
          {inboxes?.map((inbox) => (
            <Route
              key={inbox.id}
              path={`/inbox/${inbox.id}`}
              element={<Inbox inbox={inbox} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

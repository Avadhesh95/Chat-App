import React from 'react';
import { Link } from 'react-router-dom';

function InboxList({ inboxes }) {
  return (
    <div className="sidebar">
      <h2>Inboxes</h2>
      <div className="inbox-list">
        {inboxes.map((inbox) => (
          <div key={inbox.id} className="inbox-item">
            <Link to={`/inbox/${inbox.id}`}>{inbox.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InboxList;

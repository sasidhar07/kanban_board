import React from 'react';
import './Card.css';

const Card = ({ ticket, user }) => {
  console.log(ticket,user)
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 4:
        return 'priority-high';
      case 3:
        return 'priority-medium-high';
      case 2:
        return 'priority-medium';
      case 1:
        return 'priority-low';
      case 0:
        return 'priority-none';
      default:
        return '';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
     
        {user && (
          <div className="user-avatar">
              
            <span className={`status-dot ${user.available ? 'available' : ''}`}></span>
            {user.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="card-title">
        <span className={`priority-icon ${getPriorityClass(ticket.priority)}`}></span>
        {ticket.title}
      </div>
      <div className="card-tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;

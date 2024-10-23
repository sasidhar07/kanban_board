import React from 'react';
import Card from '../Card/Card';
import './Column.css';
import dots from "../../icons_FEtask/3 dot menu.svg"
import add from "../../icons_FEtask/add.svg"
const Column = ({ title, tickets, users }) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className='column-right-header'> 
          <h2>{title}</h2>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className='column-left-header'>
          <img alt='add' src={add}/>
          <img alt='more' src={dots}/>
        </div>
        
      </div>
      
      <div className="column-content">
        {tickets.map(ticket => (
          <Card 
            key={ticket.id}
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;

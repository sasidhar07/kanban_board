import React from 'react';
import Column from '../Column/Column';
import './Board.css';

const Board = ({ tickets, users, grouping, sorting }) => {
  const getPriorityLabel = (priority) => {
    const labels = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
    return labels[priority];
  };

  const groupTickets = () => {
    let grouped = {};

    if (grouping === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        const userName = user ? user.name : 'Unassigned';
        if (!acc[userName]) acc[userName] = [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      grouped = tickets.reduce((acc, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    }

    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <Column 
          key={group}
          title={group}
          tickets={tickets}
          users={users}
        />
      ))}
    </div>
  );
};

export default Board;
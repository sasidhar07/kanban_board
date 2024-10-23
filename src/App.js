import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Board from './components/Board/Board';


class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      users: [],
      grouping: localStorage.getItem('grouping')||'status',
      sorting: localStorage.getItem('sorting')||'priority'
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      this.setState({
        tickets: data.tickets,
        users: data.users
      });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  updateGrouping = (value) => {
    this.setState({ grouping: value });
    localStorage.setItem('grouping', value);
  }

  updateSorting = (value) => {
    this.setState({ sorting: value });
    localStorage.setItem('sorting', value);
  }

  render() {
    const { tickets, users, grouping, sorting } = this.state;
    return (
      <div className="app">
        <Navbar
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={this.updateGrouping}
          onSortingChange={this.updateSorting}
        />
        <Board
          tickets={tickets}
          users={users}
          grouping={grouping}
          sorting={sorting}
        />
      </div>
    );
  }
}

export default App;



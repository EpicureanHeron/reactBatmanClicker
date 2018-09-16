import React, { Component } from 'react';
import FriendCard from './Components/FriendCard'
import Wrapper from "./Components/Wrapper";
import batman from "./batman.json";

import './App.css';

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    batman
  };
  // handleIncrement increments this.state.count by 1
  removeFriend = id => {
    // We always use the setState method to update a component's state
    const batman = this.state.batman.filter(batman => batman.id !== id);
    this.setState({ batman });
  };


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <Wrapper >
        <h1 className="title">Friends List</h1>
        {this.state.batman.map(item => <FriendCard
          key={item.id}
          removeFriend = {this.removeFriend}
          id={item.id}
          name={item.name}
          image={item.image} />)}
     </Wrapper>
    );

  }


}

export default App;

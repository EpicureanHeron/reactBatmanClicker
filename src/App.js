import React from 'react';
import FriendCard from './Components/FriendCard'
import Wrapper from "./Components/Wrapper";
import batman from "./batman.json";
import Navbar from "./Components/Navbar"
import Jumbotron from "./Components/Jumbotron"
import './App.css';

//should create a compontent that is the counter which as a state fthat is equal to the current score and also keeps the best score

//this counter component should only iterate up if the click on card has not previoulsy been clicked 
//this determination could be made at the time of the click and, based on whether or not it has been clicked, it uses the compenets 

// const batman = this.state.batman.filter(batman => batman.id !== id);

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    clickedArr: [],
    batman,
    counter: 0,
    highScore: 0,
    message: ''
  };

  clicked = id => {

    const clickedArr = this.state.clickedArr;
    
    if (!clickedArr.includes(id)) {

      clickedArr.push(id);

      this.setState({message: ""})

      if (this.state.counter >= this.state.highScore) {

        this.setState({
          highScore: this.state.highScore + 1,
          counter: this.state.counter + 1,
          message: <li className="custom-font">You guessed correctly!</li>
        });

      }
      else {
        this.setState({ counter: this.state.counter + 1,
          message: <li className="custom-font">You guessed correctly!</li>
         })
      }

    }
    else {
      console.log(this.state.highScore)
      this.setState({
        counter: 0,
        highScore: this.state.highScore,
        clickedArr: [],
        message: <li className="custom-font">You guessed incorrectly!</li>
      });
    };

  };

  //array shuffling 
  //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;

  }
  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        
        <Navbar
          currentScore={this.state.counter}
          highScore={this.state.highScore}
          message={this.state.message}
        />

        <Jumbotron />

        <Wrapper >
          {this.shuffle(this.state.batman).map(item => <FriendCard
            key={item.id}
            removeFriend={this.clicked}
            id={item.id}
            name={item.name}
            image={item.image} />)}
        </Wrapper>

      </div>
    );

  }


}

export default App;

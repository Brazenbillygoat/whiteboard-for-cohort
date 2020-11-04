import React, { Component } from 'react';
import moment from 'moment';
import Gif from './Gif'
import Quote from './Quote'

//Here is a free quote api: https://type.fit/api/quotes

class App extends Component {

  state = {
    seconds: 0
  }

  
  render() {
    let testTime = new Date('November 4, 2020 14:00:00');
    let time = moment(testTime).format('MMMM Do YYYY h:mm:ss a');
    let currentTime = new Date();
    let timeLeft = new Date();//some simple math, don't over think it
        
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    const displayCurrentTime = (timeForParsing) => {
      return timeForParsing.getHours() + ":" + timeForParsing.getMinutes() + ":" + timeForParsing.getSeconds();
    }

    
    
    //the below funciton only exists to rerender the page automatically every second
    //feel free to change it but not necessary
    const updateState = setInterval(() => this.setState({seconds}), 1000)
    

    return (
      <div className="App">
        <header className="App-header">
        Good Luck on the Code Challenge<br/>
          {time}<br/>
        <Gif />
          {displayCurrentTime(currentTime)}<br/>
          create a new component to display the time left however you like
          {/* {displayTimeLeft}<br/> */}

        </header>
        <Quote />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {

  
  render() {
    let testTime = '2020-11-04 14:00:00'

    return (
      <div className="App">
        <header className="App-header">
        Good Luck on Our Code Challenge
          {moment(testTime).format('MMMM Do YYYY, hh:mm:ss a')}
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;

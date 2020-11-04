import React, { Component } from 'react';


class Quote extends Component {
  render() {
    return (
      <div className="quotes">
        <h3>Favorite Quote(s):</h3>
        <p>
          {/*add your randomly generated quote here*/}
          "Did you know I studied game design?" ~Conrad Buys~<br/>
          "└[∵┌] └[ ∵ ]┘ [┐∵]┘" ~Mark~<br/>
          "No Yeah" ~Adam~<br/>
          "Sure" ~Shannon~<br/>
          "Ummmmmm" ~Everyone~<br/>
          "*Has copious amounts of alcohol always in frame*" ~Milo~<br/>
          "*Notification sounds*" ~Alex~

        </p>
      </div>
    );
  }
}

export default Quote;

import React, { Component } from "react";
import SmurfsList from './SmurfsList';
import "./App.css";
class App extends Component {
  render() {
    return (
      <>
      
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfsList />
      </div>
      <div className='overlay'></div>
      </>
    );
  }
}

export default App;
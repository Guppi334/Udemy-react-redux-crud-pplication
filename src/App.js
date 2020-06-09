import React, { Component } from 'react';

class App extends Component{
  render() {
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked")}}></input>
      </React.Fragment>
    )
  }
}

// function App() {
//   return  <h1>Hello World!</h1>;
// }

export default App;

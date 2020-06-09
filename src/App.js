import React from 'react';

// function App() {
//   return (
//     <div>
//         <h1>
//           Hello World
//         </h1>
//     </div>
//   );
// }

const App = () => {
  return (
  <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
  </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;

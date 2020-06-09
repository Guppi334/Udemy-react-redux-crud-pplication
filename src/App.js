import React from 'react';

const App = () => {
  const profiles = [
    {name: "Takro", age:"10"},
    {name: "Hanako", age:"5"},
    {name: "NoName"}
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
  </div>
  )
}

const User = (props) => {
  return <div>Hi!, I am {props.name}. I am {props.age} years old.</div>
}

User.defaultProps = {
  age: 1
}

export default App;

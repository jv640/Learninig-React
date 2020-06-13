import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name ="Bruce" heroName = "Batman">
        <p>this is a children component</p>
      </Greet>

      <Greet name = "Clark" heroName = "Superman"/>
      <Greet name = "Diana" heroName = "Wonder Women"/>
      
    </div>
  );
}

export default App;

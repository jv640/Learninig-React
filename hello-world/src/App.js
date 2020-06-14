import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name ="Bruce" heroName = "Batman">     {/*we can pass any number of parameter by passing it as attribute */}
                      {/* important thing is props is immutable we cant change its value inside any component*/}
        {/* <p>this is a children component</p>
      </Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button>action</button>
      </Greet>
      <Greet name = "Diana" heroName = "Wonder Women"/>

      <Welcome name ="Bruce" heroName = "Batman">
        <p>this is a children components</p>
      </Welcome>
      <Welcome name ="Clark" heroName = "Superman" >
        <button>action</button>
      </Welcome>
      <Welcome name = "Diana" heroName = "Wonder Women"/> */}
      
    </div>
  );
}

export default App;

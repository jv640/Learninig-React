import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet'
// import Inline from './components/Inline';
// import Form from './components/Form';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import HookCounter from './components/setState/HookCounter';
import Hookcounter2 from './components/setState/Hookcounter2';
import MouseCounter from './components/useEffect/MouseCounter';
import TitleCounter from './components/useEffect/titleCounter';
import titleCounter from './components/useEffect/titleCounter';

function App() {
  return (
    <div className="App">
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Form /> */}
      {/* <StyleSheet />
      <Inline /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
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
      {/* <HookCounter />      
      <Hookcounter2 />       */}
      {/* <TitleCounter /> */}
      <MouseCounter />
    </div>
  );
}

export default App;

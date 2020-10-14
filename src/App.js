import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count,setCount] = React.useState(0)
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-displayer">The counter is <span data-test="count">{count}</span></h1>
      <button data-test="increment" onClick={()=>setCount(count+1)}>increment</button>
    </div>
    
  )
}

export default App;

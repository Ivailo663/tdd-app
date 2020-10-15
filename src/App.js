import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count,setCount] = React.useState(0)
  const [msg,setMsg] = React.useState(false)
  const dec = () =>{

    // if(count > 0) {
    //   setCount(count-1)
    // }else{
    //   setMsg(true)
    // }
    setCount(count-1)
  }
  const inc = () =>{
    setCount(count+1)
    setMsg(false)
  }
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-displayer">The counter is <span data-test="count">{count}</span></h1>
    
      <p data-test="msg" className={`${msg?'hidden':'msg'}`}>Cant go bellow 0</p> 
    

      <button data-test="increment" onClick={()=>inc()}>increment</button>
      <button data-test="decrement" onClick={()=>dec() }>decrement</button>
    </div>
    
  )
}

export default App;

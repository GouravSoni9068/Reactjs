import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
   
function App() {
  
  // let counter=5
  let [counter,setCounter] =useState(5)

  let valueAdd=()=>{
    if(counter<20)
      {
      counter++;
      setCounter(counter)
    }
    
  }

  let valueReduce=()=>{
    if(counter>0)
    {
      counter--;
      setCounter(counter)
    }
    console.log(counter)
  }  


  return (
    <>
      <h1>Project2</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={valueAdd}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={valueReduce}>Remove Value {counter}</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'


function App() {
  let myObj={
    name:"Gourav",
    class:"BTech"

  }
  let myArray=[1,2,3]
  return (
    <>
      <h1 className="text-red-500 bg-green-500 rounded-2xl mb-7">wdj</h1>
      <Cards username="hqvev"  />
      <Cards username="hitesh" btnText="Click Me" />
    </>
  )
} 

export default App

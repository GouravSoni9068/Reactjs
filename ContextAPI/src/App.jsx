import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { useContext } from 'react'
import { DataContext } from './context/usercontext'
const App = () => {
  
  let data=useContext(DataContext)
  console.log(data)


  return (
    <div>

      <h1>Hello from App.jsx {data.age}</h1>
      <Header/>
      <Section/>
      <Footer/>

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color,setColor]=useState("olive")

  return (
    <>
      <div className="container h-screen w-screen p-0 m-0 duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex justify-center bottom-5 left-1/3 gap-7 ">
          <div className='flex gap-8 bg-slate-100 px-4 py-2 rounded-xl'>
            <div className='bg-red-700 rounded-xl px-4 py-2 '  onClick={()=>setColor("red")}>red</div>        
            <div className='bg-green-700 rounded-xl px-4 py-2'  onClick={()=>setColor("green")}>green</div>          
            <div className='bg-blue-700 rounded-xl px-4 py-2'  onClick={()=>setColor("blue")}>blue</div>
            <div className='bg-yellow-700 rounded-xl px-4 py-2'  onClick={()=>setColor("yellow")}>yellow</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

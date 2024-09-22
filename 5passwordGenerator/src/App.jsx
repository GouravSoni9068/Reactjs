import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  let [length,setlength]=useState(8)
  let [numberAllowed,setnumberAllowed]=useState(false)
  let [characterAllowed,setcharacterAllowed]=useState(false)
  let [Password,setpassword]=useState("")

  let generatePassword=useCallback(()=>{
    let str="";
    let pass="";
    str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed)
    {
      str+="1234567890"
    }
    if(characterAllowed)
    {
      str+="!@#$%&'()*+,-./"
    }
    for(let i=0;i<length;i++)
    {
      let idx=Math.floor(Math.random()*str.length)
      pass+=str[idx]
    }
    setpassword(pass)

  },[length,numberAllowed,characterAllowed])
  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,characterAllowed,generatePassword])

  // useRef Hook

  let passwordRef=useRef(null)

  function copyToClipboard()
  {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(Password)
  }

  return (
    <>
      <div className="container bg-slate-700 mx-auto w-3/4 p-6 rounded-lg text-orange-500 flex-col align-middle justify-center ">
        <h1 className='text-white'>Password Generator</h1>
        <input
         type="text" 
         value={Password}
         className='rounded-lg py-1 px-2 outline-none w-2/4 my-3 ' 
         placeholder='password' 
         readOnly
         ref={passwordRef}
         />
         <button
          className='bg-blue-800 px-2 py-1 rounded-lg hover:bg-blue-700' 
          onClick={copyToClipboard} >copy</button>
        <div className='flex gap-2 justify-center align-middle'>
          <div>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>setlength(e.target.value)}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          
          <div>
            <input
            type="checkbox" 
            id='numberInput'
            defaultChecked={numberAllowed}
            onChange={()=>setnumberAllowed(!numberAllowed)}
            />
            <label htmlFor="">Number Allowed: {numberAllowed.toString()} </label>
          </div>
          <div>
            <input
            type="checkbox" 
            id='characterInput'
            defaultChecked={characterAllowed}
            onChange={()=>setcharacterAllowed(!characterAllowed)}
            />
            <label htmlFor="">Character Allowed: {characterAllowed.toString()}</label>
          </div>
        </div>

      </div>
    </>

  )
}

export default App

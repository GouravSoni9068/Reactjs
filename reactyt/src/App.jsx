import { useState } from "react"

function App()
{
  const [Name, setName] = useState("")

  let formSubmit=(e)=>{
    e.preventDefault()
    console.log(Name)

    setName("")
  }


  return <form onSubmit={()=>{
    formSubmit(e)
  }}>
    <input

     onChange={(e)=>{
      setName(e.target.value)
     }}
     value={Name}
     className="p-4" type="text"
     placeholder="Enter name" 
    />
    <button className="bg-blue-800 text-white p-3 m-4">submit</button>
  </form>
}

export default App
import React from 'react'
import Card from './components/Card'

const App = () => {

  let Userdata=[
    {
      "name": "Aarav Mehta",
      "age": 24,
      "city": "Mumbai",
      "profilePhoto": ""
    },
    {
      "name": "Sara Khan",
      "age": 22,
      "city": "Delhi",
      "profilePhoto": "./Screenshot 2024-07-30 233845.png"
    },
    {
      "name": "Rohan Das",
      "age": 26,
      "city": "Bangalore",
      "profilePhoto": "https://example.com/photos/rohan.jpg"
    },
    {
      "name": "Priya Sharma",
      "age": 23,
      "city": "Chandigarh",
      "profilePhoto": "https://example.com/photos/priya.jpg"
    },
    {
      "name": "Vikram Singh",
      "age": 25,
      "city": "Hyderabad",
      "profilePhoto": "https://example.com/photos/vikram.jpg"
    }
  ]
  
  

  return (
    <div>
      
      
      {
        Userdata.map((ele,key)=>{
          return <Card key={key} profilePhoto={ele.profilePhoto} name={ele.name} city={ele.city} age={ele.age} />
        })
      }
      
    </div>
  )
}

export default App

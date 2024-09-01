import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// we can add directly from here

// function MyMain()
// {
//   return (
//     <div>
//       <h1>Custom function! </h1>
//     </div>
//   )
// }


// We can not add element direct from object

// let ReactElement={
//   type:'a',
//   props:{
//       href:"http://google.com",
//       target:"_blank"
//   },
//   children:'click me'
// }  


// We can add new element directly from here

let anotherUser='chai aur react'
let NewElement=React.createElement(
  'a',    //type
  {                          //Props
    href:'http://google.com',
    target:'blank'
  },
  'click Me',                //children
  anotherUser
)
 
createRoot(document.getElementById('root')).render(
  NewElement
)

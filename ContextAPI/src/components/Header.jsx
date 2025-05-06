import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/usercontext'

const Header = () => {
  let data=useContext(DataContext)
  console.log(data);
  return (
    <div>
      <h1>Header {data.username}</h1>
    </div>
  )
}

export default Header

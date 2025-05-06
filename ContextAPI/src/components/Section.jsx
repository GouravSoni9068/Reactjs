import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/usercontext'

const Section = () => {
  let data=useContext(DataContext)

  return (
    <div>
      <h1>Section {data.city}</h1>
    </div>
  )
}

export default Section

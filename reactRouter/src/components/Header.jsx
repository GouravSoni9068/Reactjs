import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <div className='bg-gray-700 px-10 py-4 flex justify-between items-center'>
        <h2 className='text-3xl '>React</h2>
        <input className='text-black' type="text" />
        <div className='flex gap-10 underline text-lg'>
          
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/product'}>Product</Link>
          <Link to={'/contact'}>Contact</Link>

        </div>
    </div>
  )
}

export default Header

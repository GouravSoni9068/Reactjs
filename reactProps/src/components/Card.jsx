import React from 'react'

const Card = (props) => {
    console.log(props.profilePhoto)
  return (
    
        <div className=' bg-white text-black inline-block text-center p-20 m-5 rounded'>
            <img className='h-28 w-28 rounded-full mb-4 text-center ml-5' src={props.profilePhoto} alt="" />
            <h1 className='text-3xl font-semibold mb-2'> {props.name}</h1>
            <h2 className='text-2xl mb-2'>{props.city}, {props.age}</h2>
            <button className='bg-blue-950 text-white px-4 py-2 mb-2 rounded'>Add Friend</button>

        </div>
  )
}

export default Card

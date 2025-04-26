import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  let getData=async ()=>{
    let response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setData(response.data)
    console.log(data)
  }
  getData()


  return (
    <div className='p-11'>
      {/* <button onClick={getData} className='relative left-1/2 bg-indigo-600 text-white font-semibold text-2xl px-5 py-4 rounded'>Get data</button> */}

      <div className='bg-gray-800 p-5 mt-2'>
        {
          data.map((ele,idx)=>{
            return (
              <div key={idx} className='bg-white p-3 m-2 text-black inline-block text-center'>
                  <img className='h-40 mb-10'  src={ele.download_url} alt="" />
                  <h4 className='text-2xl font-semibold'>{ele.author}</h4>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default App

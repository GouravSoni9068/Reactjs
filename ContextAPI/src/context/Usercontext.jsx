import React from 'react'
import { createContext } from 'react';

export let DataContext=createContext()

const Usercontext = ({children}) => {

    let userData={
        username:"Gourav",
        age:21,
        city:"Hansi"
    }

  return (
    <div>
        <DataContext.Provider value={userData}>
            {children} 
        </DataContext.Provider>
    </div>
  )
}

export default Usercontext

import React from 'react'

import NavPart2 from "./NavPart2"

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-3 bg-emerald-900">
                <h2 className="text-2xl">React</h2>
                <NavPart2 />

    </nav>
  )
}

export default Navbar

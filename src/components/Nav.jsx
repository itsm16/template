import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='h-18 px-5 justify-between flex bg-black border-b border-solid border-gray-400' >
    <div className="flex text-white">
      <img className="m-2 w-12 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo" />
    <h1 className="self-center mx-2 text-xl text-white font-semibold">
      <NavLink to='' >React</NavLink>
    </h1>
    </div>
    <div className='flex text-white'>
    <ul className='flex space-x-4 px-2 self-center'>
  
        <li className='hover:underline' >
            <NavLink to="/docs" >Docs</NavLink>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Nav

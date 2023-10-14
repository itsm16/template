import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function Nav() {
  return (
    <div className='h-18 px-5 justify-between flex bg-white border-b border-solid border-gray-400' >
    <div className="flex text-black">
      <img className="m-2 w-12 h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo" />
    <h1 className="self-center mx-2 text-xl text-black font-semibold">
      <Link to='/' >React</Link>
    </h1>
    </div>
    <div className='flex h-12 self-center px-5  rounded-full space-x-2 border-2 border-black opacity-90'>
      <SearchIcon className='h-5 w-5 self-center'/>
      <input placeholder='Search...' className=" placeholder-black-400 m-2 h-8 w-25 self-center text-black focus: placeholder-opacity-40 bg-white outline-none" type="text" />
    </div>
    <div className='flex text-black'>
    <ul className='flex space-x-4 px-2 self-center'>
  
        <li className='hover:underline' >
            <Link to="/docs" >Docs</Link>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Nav
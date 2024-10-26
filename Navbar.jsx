import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className='flex bg-indigo-900 font-bold text-white  justify-between text-lg list-none'>
        

<NavLink className={(e)=>{return e.isActive ? "red" : " "}} to="/" > <li className='py-4 px-10'> eTask </li></NavLink>
<NavLink className={(e)=>{return e.isActive ? "red" : " "}}     to="/YourTasks"><li className='py-4 px-10'>Your Tasks</li></NavLink>

    </nav>
    </div>
  )
}

export default Navbar

//    text-white py-3  
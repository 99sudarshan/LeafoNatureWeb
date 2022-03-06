import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-zinc-700 flex justify-between items-center h-16 sticky top-0 w-full">
                <h3 className='text-white pl-10 text-4xl [text-shadow:2px_1px_0px_#f36] font-bold tracking-wider font-mono'>Leafo</h3>
                <ul className='text-white hidden lg:flex items-center lg:gap-16 2xl:gap-24 lg:px-10 ' id='menu-list'>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/'>Home</NavLink> </li>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/'>Our Product</NavLink>
                    </li>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/'>Blog</NavLink>
                    </li>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/'>Contact</NavLink>
                    </li>
                    <li className='nav-button-style text-center'>
                        <NavLink to='/'>Consultation</NavLink>
                    </li>
                </ul>
                <div className='lg:hidden px-6 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </nav>
            <div className={`lg:hidden fixed w-full py-5 bg-zinc-700 transition-all duration-300 delay-150 ${isOpen ? "top-[4rem]" : "-top-[30rem]"}`} >
                <ul className='flex flex-col text-center gap-3 text-white'>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/' >Home</NavLink> </li>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/' >Our Product</NavLink>
                    </li>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/' >Blog</NavLink>
                    </li>
                    <li className='nav-text text-center py-3 hover:bg-blue-400'>
                        <NavLink to='/'  >Contact</NavLink>
                    </li>
                    <li className='nav-button-style w-32 m-auto'>
                        <NavLink to='/' >Consultation</NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default NavBar;
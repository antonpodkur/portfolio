import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex flex-col items-start sm:flex-row sm:items-center">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inline-flex items-center pl-6 pt-6 pb-3 sm:py-6 px-3 mr-4 text-2xl md:text-4xl font-bold cursive tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-indigo-300 to-pink-200"
                    onClick={()=>{setNavbarOpen(false)}}
                    >
                        AntonPodkur
                    </NavLink>
                    <div className="pb-3 pl-6 sm:pb-0">
                    <button className="text-black cursor-pointer text-sm leading-none px-3 py-3 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none casual bg-gradient-to-br from-purple-400 to-purple-300"
                    type="button"
                    onClick={()=>setNavbarOpen(!navbarOpen)}
                    >
                        Menu
                    </button>
                    </div>
                    <div className={
              "sm:flex flex-col sm:flex-row items-center" +
              (navbarOpen ? " flex" : " hidden")
            }>
                        <NavLink 
                        to="/post" 
                        className="inline-flex items-center sm:py-3 md:mx-1 px-3 my-6 text-white casual nav-button"
                        activeClassName="bg-purple-700 rounded"
                        onClick={()=>{setNavbarOpen(false)}}
                        >
                            Blog
                        </NavLink>
                        <NavLink 
                        to="/project" 
                        className="inline-flex items-center sm:py-3 md:mx-1 px-3 my-6 text-white casual nav-button"
                        activeClassName="bg-purple-700 rounded"
                        onClick={()=>{setNavbarOpen(false)}}
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                        to="/about" 
                        className="inline-flex items-center sm:py-3 md:mx-1 px-3 my-6 text-white casual nav-button"
                        activeClassName="bg-purple-700 rounded"
                        onClick={()=>{setNavbarOpen(false)}}
                        >
                            About me
                        </NavLink>
                    </div>
                </nav>
                <div className="inline-flex sm:py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/antonpodkur" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.instagram.com/antonpodkur/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>    
    )
}
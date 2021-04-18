import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-white text-4xl font-bold cursive tracking-widest text-white">
                        AntonPodkur
                    </NavLink>
                    <NavLink 
                    to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 text-white hover:text-gray-400 casual"
                    activeClassName="text-red-100 bg-purple-700 rounded"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                    to="/project" 
                    className="inline-flex items-center py-3 px-3 my-6 text-white hover:text-gray-400 casual"
                    activeClassName="text-red-100 bg-purple-700 rounded"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    className="inline-flex items-center py-3 px-3 my-6 text-white hover:text-gray-400 casual"
                    activeClassName="text-red-100 bg-purple-700 rounded"
                    >
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/antonpodkur" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.instagram.com/antonpodkur/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>    
    )
}
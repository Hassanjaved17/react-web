import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const handleToggle = () => setOpen(!open);
  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  const linkClasses = (path) =>
    `px-3 py-1 rounded transition-colors duration-300 ${location.pathname === path
      ? 'bg-red-500 text-white'
      : 'hover:bg-red-500 hover:text-white'
    }`;

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-[#333] text-white'} shadow-md`}>
      {/* Navbar Desktop */}
      <div className='flex justify-between items-center px-6 py-4'>
        <Link to='/' className='text-xl font-bold'>Skyper's</Link>

        <ul className='hidden md:flex items-center gap-6'>
          <li><Link to='/' className={linkClasses('/')}>Home</Link></li>
          <li><Link to='/about' className={linkClasses('/about')}>About</Link></li>
          <li><Link to='/services' className={linkClasses('/services')}>Services</Link></li>
          <li><Link to='/contact' className={linkClasses('/contact')}>Contact</Link></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button
            onClick={handleDarkModeToggle}
            className='text-sm px-2 py-1 border border-white rounded hover:bg-white hover:text-black transition'
          >
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>

          <div className='md:hidden' onClick={handleToggle}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>

      {/* Navbar Mobile Dropdown */}
      {open && (
        <div className='md:hidden flex flex-col items-center gap-4 pb-4'>
          <Link to='/' className={linkClasses('/')}>Home</Link>
          <Link to='/about' className={linkClasses('/about')}>About</Link>
          <Link to='/services' className={linkClasses('/services')}>Services</Link>
          <Link to='/contact' className={linkClasses('/contact')}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

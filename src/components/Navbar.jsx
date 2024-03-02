// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Your existing styles
import logoImg from '../images/logo.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link to='/' className='flex items-center text-white'>
          <img src={logoImg} alt='site logo' className='mr-2 h-10' />
          <span className='text-uppercase font-semibold text-lg'>bookhub</span>
        </Link>
        <button
          type='button'
          className='lg:hidden text-white focus:outline-none'
          onClick={handleNavbar}
        >
          <HiOutlineMenuAlt3 size={35} />
        </button>
        <div
          className={`lg:flex ${toggleMenu ? 'flex' : 'hidden'} items-center`}
        >
          <ul className='flex lg:ml-auto'>
            <li className='mr-4'>
              <Link
                to='book'
                className='text-white text-lg font-semibold hover:text-gray-400'
              >
                Home
              </Link>
            </li>
            <li className='mr-4'>
              <Link
                to='about'
                className='text-white text-lg font-semibold hover:text-gray-400'
              >
                About
              </Link>
              </li>
            <li className='mr-4'>
            <Link
                to='favorite'
                className='text-white text-lg font-semibold hover:text-gray-400'
              >
                Favorite
              </Link>
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import LOGO from '../assets/bazaar-removebg-preview.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between  p-4'>
      <img className='w-32 hidden sm:block' src={LOGO} alt='' />
      <div className='flex gap-4 items-center'>
        <Link className='border-2 border-orange-500 visited:bg-orange-400 rounded-lg py-1 px-2 ' to='/'>
          Market Place
        </Link>
        <Link
          className=' rounded-lg bg-orange-500 text-white py-1 px-2 '
          to='/'
        >
          Sell Items
        </Link>
        <button className='border-2 border-orange-500 rounded-lg py-1 px-2 ' to='/'>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col items-center'>
        <Link to="/" className='uppercase text-[30px] cursor-pointer'>  Intuitive Quiz Hub</Link>
        <hr  className='w-full boreder bottom-2 border-gray-500 m-[10px]'/>
    </div>
  );
}

export default Header;

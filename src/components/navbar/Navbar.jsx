import React from 'react';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='title'>Product Display</h1>
      <div className='search'>
      <SearchTwoToneIcon/>
      <input type='text' placeholder='search Here'/>
      </div>
    </div>
  );
}

export default Navbar;

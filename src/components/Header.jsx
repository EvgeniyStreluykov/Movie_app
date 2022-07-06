import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import BtnLogIn from './BtnLogIn';

import '../styles/header.css';

const Header = () => {

  return (
    <header className='header'>
      <Link to="/"><img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" alt="logo" /></Link>
      <Navigation />
      <BtnLogIn />
    </header>
  )
}

export default Header;
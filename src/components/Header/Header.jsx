import React from 'react';
import './style.css';
import logo from './img/logo.png'

export function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="logo" className='logo' />
      <h1 className='header__h1'>Choose your pokemon!</h1>
    </header>
  )
}

import React from 'react';
import './style.css'
import PokemonsList from '../components/containers/PokemonsList/PokemonsList';
import { Footer } from '../components/Footer/Footer';
import logo from './img/logo.png'
import { Header } from '../components/Header/Header';

export function Main() {

  return (
    <div className='wrapper'>
      <div className='main'>
        <Header />
        <div className='logo-container'>
          <img src={logo} alt="logo" className='logo' />
          <h1 className='logo__h1'>Choose your pokemon!</h1>
        </div>
        <PokemonsList />
      </div>
      <Footer />
    </div>
  )
}

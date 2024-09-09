import React from 'react';
import './css/style.css'
import { BackButton } from '../components/BackButton/BackButton';
import { PokemonInfo } from '../components/containers/PokemonInfo/PokemonInfo';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export function SearchResult() {

  return (
    <div className='wrapper'>
      <div className='main'>
        <Header />
        <BackButton />
        <PokemonInfo />
        <Footer />
      </div>
    </div>
  )
}


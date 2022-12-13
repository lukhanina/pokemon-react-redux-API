import React from 'react';
import './css/style.css'
import { Search } from '../components/containers/Search/Search'
import { BackButton } from '../components/BackButton/BackButton';
import { PokemonInfo } from '../components/containers/PokemonInfo/PokemonInfo';
import { Footer } from '../components/Footer/Footer';

export function SearchResult (){
  
  return (
    <>
      <BackButton />
      <Search />
      <PokemonInfo />
      <Footer />
    </>
  )
}


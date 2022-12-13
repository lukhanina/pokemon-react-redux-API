import React from 'react';
import './css/style.css'
import PokemonsList from '../components/containers/PokemonsList/PokemonsList';
import { Header } from '../components/Header/Header';
import { Search } from '../components/containers/Search/Search'
import { Footer } from '../components/Footer/Footer';

export function Main (){
  
  return (
    <>
      <Header />
      <Search />
      <PokemonsList />
      <Footer />
    </>
  )
}

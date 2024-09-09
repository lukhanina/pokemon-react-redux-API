import React, { useState, useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function PokemonInfo() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => alert(err.message))
  }, [name])

  const abilitiesList = pokemon?.abilities?.map((el, idx) => {
    const isHidden = el.is_hidden ? '(hidden)' : '';
    return (
      <li key={idx} className='pkm-pks__li'>
        {el.ability.name} {isHidden}
      </li>
    )
  }
  )

  const typesList = pokemon?.types?.map((el, idx) => {
    return (
      <li key={idx} className='pkm-pks__li'>
        {el.type.name}
      </li>
    )
  }
  )

  const movesList = pokemon?.moves?.map((el, idx) => {
    return (
      <li key={idx} className='pkm-pks__li'>
        {el.move.name}
      </li>
    )
  }
  )

  return (
    <article className='pkm-pks'>
      <div className='pkm-pks-flex'>
        <div className='left-part'>
          <img src={pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.other['official-artwork']?.front_default} alt={pokemon.name} className='pkm-pks__img' />
        </div>
        <div className='right-part'>
          <h1 className='pad-t-15 upcs'> {pokemon?.name}</h1>
          <h3 className='pad-t-15'>Id: {pokemon?.id}</h3>
          <p className='pad-t-15'>Height: {pokemon?.height / 10} m</p>
          <p className='pad-t-15'>Weight: {pokemon?.weight / 10} kg</p>
          <p className='pad-t-15'>Base experience: {pokemon?.base_experience}</p>
        </div>
      </div>
      <div className='pkm-pks-block'>
        <div className='pkm-pks-flex'>
          <div className='pkm-pks__abilities'>
            <h3 className='pkm-pks__h3'>Abilities</h3>
            <ul className='pkm-pks__list'>
              {abilitiesList}
            </ul>
          </div>
          <div className='pkm-pks__types'>
            <h3 className='pkm-pks__h3'>Types</h3>
            <ul className='pkm-pks__list'>
              {typesList}
            </ul>
          </div>
        </div>
        <h3 className='pkm-pks__h3'>Moves</h3>
        <ul className='pkm-pks__list'>
          {movesList}
        </ul>
      </div>
    </article>
  );
}

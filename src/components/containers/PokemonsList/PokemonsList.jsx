import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadPokemons } from '../../../store/actions/msg_action';
import { bindActionCreators } from 'redux';

function PokemonsList(props) {
  const pokemons = props.pokemons.results;
  const currectPage = props.pokemons.next ? props.pokemons.next : 0;

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching && props.pokemons.next !== null) {
      props.loadPokemons(currectPage)
        .finally(() => setFetching(false))
    }
  }, [fetching])

  const scrollHandler = (e) => {
    if (((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop +
      window.innerHeight)) < 100)) {
      setFetching(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const pokemonsList = pokemons?.map((el, idx) => {
    const name = el.name;
    return (
      <Link to={`/pokemon/${name}`} key={idx}>
        <Button
          variant="primary"
          className="pokemons-list__button"
        >
          {name}
        </Button>
      </Link>
    )
  }
  )

  return (
    <main className='pokemons-list'>
      {pokemonsList}
    </main>
  )
}

const mapStateToProps = ({ pkmReducer }) =>
({
  pokemons: pkmReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({ loadPokemons }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);

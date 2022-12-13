//import { getJSON, RSAA } from 'redux-api-middleware';

export const START_LOAD_POKEMONS_LIST = '@@message/START_LOAD_POKEMONS_LIST';
export const SUCCESS_LOAD_POKEMONS_LIST = '@@message/SUCCESS_LOAD_POKEMONS_LIST';
export const ERR_LOAD_POKEMONS_LIST = '@@message/ERR_LOAD_POKEMONS_LIST';
import axios from 'axios'

export let loadPokemons = (currentPage) => {
  // [RSAA]: {
  //   endpoint: currentPage || 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100',
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  //   types: [
  //     START_LOAD_POKEMONS_LIST,
  //     {
  //       type: SUCCESS_LOAD_POKEMONS_LIST,
  //       payload: (action, state, res) => getJSON(res).then(json => json)
  //     },
  //     ERR_LOAD_POKEMONS_LIST
  //   ]

  // }
  return (dispatch) => {
    return axios.get(currentPage || 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
      .then(response => {
        return response.data
      })
      .then(data => {
        dispatch({
          type: SUCCESS_LOAD_POKEMONS_LIST,
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  }
}

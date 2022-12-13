//import { getJSON, RSAA } from 'redux-api-middleware';

export const START_LOAD_POKEMONS_LIST = '@@message/START_LOAD_POKEMONS_LIST';
export const SUCCESS_LOAD_POKEMONS_LIST = '@@message/SUCCESS_LOAD_POKEMONS_LIST';
export const ERR_LOAD_POKEMONS_LIST = '@@message/ERR_LOAD_POKEMONS_LIST';
import axios from 'axios'

export let loadPokemons = (currentPage) => {
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

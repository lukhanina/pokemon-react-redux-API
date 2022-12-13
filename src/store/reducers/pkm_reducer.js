import { SUCCESS_LOAD_POKEMONS_LIST } from '../actions/msg_action';
const initStore = {
  next: '',
  results: [],
};

export function pkmReducer(store = initStore, action) {
  switch (action.type) {
  case SUCCESS_LOAD_POKEMONS_LIST:
    return {
      next: action.payload.next,
      results: store.results.concat(action.payload.results)
    };
  default:
    return store
  }
}

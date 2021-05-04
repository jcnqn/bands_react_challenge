import { types } from '../types/types';

export const getAllGenres = () => {
  return async dispatch => {
    let resp = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/genre');
    resp = await resp.json();
    dispatch(allGenres(resp));
  };
};

export const allGenres = genres => ({
  type: types.allGenres,
  payload: {
    genres,
  },
});

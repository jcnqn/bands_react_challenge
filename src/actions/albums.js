import { types } from '../types/types';

export const getAllAlbums = () => {
  return async dispatch => {
    let resp = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/albums');
    resp = await resp.json();
    dispatch(allAlbums(resp));
  };
};

export const allAlbums = albums => ({
  type: types.allAlbums,
  payload: {
    albums,
  },
});

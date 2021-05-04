import { types } from '../types/types';

export const getAllBands = () => {
  return async dispatch => {
    let resp = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands');
    resp = await resp.json();
    dispatch(allBands(resp));
  };
};
export const getBandsByName = (param) => {
  return async dispatch => {
    let resp = await fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${param}`);
    resp = await resp.json();
    dispatch(allBands(resp));
  };
};
export const getBandsByGenre = (genre) => {
  return async dispatch => {
    let resp = await fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?genreCode=${genre}`);
    resp = await resp.json();
    dispatch(allBands(resp));
  };
};


export const allBands = bands => ({
  type: types.allBands,
  payload: {
    bands,
  },
});

import { types } from '../types/types';

export const genresReducer = (state = {}, action) => {
  switch (action.type) {
  case types.allGenres:
    return {
      genres: action.payload.genres,
    };

  default:
    return state;
  }
};

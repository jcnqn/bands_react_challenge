import { types } from '../types/types';

export const bandsReducer = (state = {}, action) => {
  switch (action.type) {
  case types.allBands:
    return {
      bands: action.payload.bands,
    };

  default:
    return state;
  }
};

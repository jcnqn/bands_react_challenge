import { types } from '../types/types';

export const albumsReducer = (state = {}, action) => {
  switch (action.type) {
  case types.allAlbums:
    return {
      albums: action.payload.albums,
    };

  default:
    return state;
  }
};

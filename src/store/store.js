import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { bandsReducer } from '../reducers/bandsReducer';
import {albumsReducer} from "../reducers/albumsReducer";
import {genresReducer} from "../reducers/genresReducer";

const reducers = combineReducers({
  auth: authReducer,
  bands: bandsReducer,
  albums: albumsReducer,
  genres: genresReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
);

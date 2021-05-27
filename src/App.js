import { Provider } from 'react-redux';

import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import { AppRouter } from './routers/AppRoutes';


export function App() {

  return (
    <Provider store={ store }>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
}

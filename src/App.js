import { Provider } from 'react-redux';

import { store } from './store/store';

import './App.css';
import './bootstrap.min.css';
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

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import createStore from './create-store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

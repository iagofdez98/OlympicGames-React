import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-action-middleware'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import createHistory from "history/createBrowserHistory"

/**
 * Esto es la entrada de React en la aplicación. 
 * Renderiza el componente padre de todo (App) en la id 'root' de public/index.html
 * El método registerServiceWorker va en relación al concepto de las progressive web apps.
 * https://developers.google.com/web/progressive-web-apps/
 * Como no nos molesta, lo dejamos ahí por el momento
 */
const store = createStore(reducer, applyMiddleware(thunk, promiseMiddleware))
const history = createHistory()

ReactDOM.render(
  <BrowserRouter createHistory={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

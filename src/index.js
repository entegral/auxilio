import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {  HashRouter} from 'react-router-dom'; 



// import { createStore } from 'redux';

// const store = createStore(firstReducer)

const render = (Component) => {
    ReactDOM.render(
        < HashRouter > 
          <Component />
        </HashRouter>,
    document.getElementById('root')
  );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';
import './index.css';

console.log(store);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

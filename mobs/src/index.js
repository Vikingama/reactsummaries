import React from 'react';
import ReactDOM from 'react-dom';
import * as mobx from "mobx";
import * as mobxreact from "mobx-react"
import App from './App';
import store from './store';
import './index.css';

console.log(store);
console.log(mobx);
console.log(mobxreact);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

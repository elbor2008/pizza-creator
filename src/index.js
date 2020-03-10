import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

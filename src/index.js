import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';
import App from './containers/App';

ReactDOM.render( 
    <App />, document.getElementById('root')
);


reportWebVitals();

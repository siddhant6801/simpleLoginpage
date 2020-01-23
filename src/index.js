import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import button from './button';
//import Textfield from './Textfield';
//import Password from './Password';
//import Radiobutton from './Radiobutton';
//import Checkbox from './Checkbox';
//import Label from './Label';
//import Sub from './Sub';
//import NeonButton from './NeonButton';
//import sum from './sum';
//import styles from './button.css';
import Login from './Login';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<button />, document.getElementById('root'));
//ReactDOM.render(<Textfield />, document.getElementById('root'));
//ReactDOM.render(<Password />, document.getElementById('root'));
//ReactDOM.render(<Radiobutton />, document.getElementById('root'));

ReactDOM.render(<Login/>, document.getElementById('root'));
//document.body.innerHTML = `<button class="${styles.button}">test</button>`;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

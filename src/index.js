import React from 'react';
import ReactDOM from 'react-dom';
import Room from './Room.js';
import Temp from './Temp.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <>
    <Room image1="bulb-on.gif" image2="bulb-off.gif" />
    <Temp />
 
 </>   ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

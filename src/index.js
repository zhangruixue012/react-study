import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './components/Clock';
import * as serviceWorker from './serviceWorker';

/*const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};*/

function tick() {
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

serviceWorker.unregister();

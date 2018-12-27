import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
    return user.name + ' ' + user.surname;
}
/*
function getGreetingUser(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger!</h1>
}
*/
const user = {
    name: 'Murad',
    surname: 'Rustamov',
    avatarUrl: 'Http://google.com',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, harum.'
};
const element = (
    <div>
        <h1>Hello, {formatName(user)}</h1>

    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

serviceWorker.unregister();

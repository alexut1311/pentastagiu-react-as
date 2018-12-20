import React from 'react';
import ReactDOM from "react-dom";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function writeSomethingRandom() {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var word = ''
    for (var i = 0; i < Math.floor(Math.random() * 16); i++)
        word += letters[Math.floor(Math.random() * 16)]
    word += ' '
    if (word.length > 4)
        return word
    else
        return writeSomethingRandom()
}

function generare() {
    var word = ''
    for (var i = 0; i < 2500; i++){
        word += writeSomethingRandom() + " "
        if (i === Math.floor(Math.random() * 1337))
            word+=' easter egg si inca ceva '
        }
    return word
}
alert('Epilepsy alert , don`t enter if you have problems with flashing colors ')

function tick() {

    const element = React.createElement('div', {
        id: 'div1',
        style: {
            backgroundColor: getRandomColor(),
            height: '100%'
        }
    }, 'Bun venit  ' + generare())


    ReactDOM.render(element, document.getElementById("root"))
}

setInterval(tick, 1000)
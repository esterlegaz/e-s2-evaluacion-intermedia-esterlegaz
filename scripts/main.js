'use strict';

//variables
const input = document.querySelector('.main__input');
const counter = document.querySelector('.main__counter');
const hints = document.querySelector('.main__instructions');
const btn = document.querySelector('.main__btn');
const randomNumber = getRandomNumber(100);
let c = 0;
counter.innerHTML = c;

//generar número aleatorio y mostrarlo por consola
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}  
console.log('El número aleatorio es ' + randomNumber);

//Al pulsar el botón, acceder al value del input y mostrarlo en consola.
function send(event){
    let inputContent = event.currentTarget;
    inputContent = input.value;
    console.log(inputContent);
}

//Comparar el número que el usuario ha escrito en el input y mostrarlo en consola
function compare(){
    let inputValue = parseInt(input.value);
    console.log('>',randomNumber,inputValue);
    if(inputValue === randomNumber) {
        hints.innerHTML = '¡HAS GANADO, CAMPEONA!';
    }
    else if(inputValue < randomNumber) {
        hints.innerHTML = 'Demasiado bajo';
        c = c+1;
        counter.innerHTML = c;
    }
    else {
        hints.innerHTML = 'Demasiado alto';
        c = c+1;  
        counter.innerHTML = c;
    };
}

//actualizar el contador de intentos
function all(){
    send(event);
    compare();
}

//pintar el feedback
btn.addEventListener('click', compare);

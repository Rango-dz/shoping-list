"use strict";
var buttonEnter = document.querySelector('#enter');
var inputList = document.querySelector('#userinput'); 
var liList = document.querySelectorAll('li');
var ulList = document.querySelector('ul');

for (var i = 0; i < liList.length; i++ ) {
    let buttonI = document.createElement('button');
    buttonI.textContent = 'Delete me';
    buttonI.classList.add('remove');
    liList[i].appendChild(buttonI);
}

const addmeinside = () => {
    let itemO = document.createElement('li');
    let buttonI = document.createElement('button');
    buttonI.textContent = 'Delete me';
    buttonI.classList.add('remove');
    let itemI = document.createTextNode(inputList.value + ' ');
    itemO.appendChild(itemI);
    itemO.appendChild(buttonI);
    ulList.appendChild(itemO);
    inputList.value = '';
}

const removeItem = (e) => {
    if (e.target.tagName == 'BUTTON') {
        e.target.parentNode.remove();
    } else if (e.target.tagName == 'LI') {
    e.target.classList.toggle('done');
    }
} 

const weClicked = () => {
    if (inputList.value.length > 0 ) {
        addmeinside();
    } else {
        
    }
}

const wePressed = (eve) => {
    if (inputList.value.length > 0 && eve.keyCode === 13) {
        addmeinside();
    }
}

inputList.addEventListener('keydown', wePressed);
buttonEnter.addEventListener('click', weClicked);
ulList.addEventListener('click', removeItem);

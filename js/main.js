'use strict';

// Function 

function myCreateDomElement(tag, className, content) {

    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.innerHTML = content;

    return newElement;
}

function createNcells(htmlElement, num) {

    for (let i = 1; i <= num; i++) {
        const cell = myCreateDomElement('div', 'cell', i);
        htmlElement.append(cell);
        cell.addEventListener('click', function () {
            clicked(cell, 'yellow');
        })
    }
}

function clicked(htmlElement, tag) {

    htmlElement.classList.add(tag);
    console.log(htmlElement.innerHTML);
}


// end function

const startButton = document.getElementById('start');
const boardContainer = document.querySelector('.board-container');
console.log(startButton, boardContainer);
let board;

startButton.addEventListener('click', function () {
    board = myCreateDomElement('div', 'board', '')
    boardContainer.append(board);
    createNcells(board, 100);
})

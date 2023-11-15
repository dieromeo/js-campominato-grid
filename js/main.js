'use strict';

// Function 

function myCreateDomElement(tag, className, content) {

    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.innerHTML = content;

    return newElement;
}

function createNcells(htmlElement, num, className) {

    for (let i = 1; i <= num; i++) {
        const cell = myCreateDomElement('div', className, i);
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

function createByDifficulty(difficulty) {
    if (difficulty === 'Easy') {
        createNcells(board, 100, 'cell-10');
    }
    else if (difficulty === 'Normal') {
        createNcells(board, 81, 'cell-9');
    }
    else if (difficulty === 'Hard') {
        createNcells(board, 49, 'cell-7');
    }
}


// end function

const startButton = document.getElementById('start');
const boardContainer = document.querySelector('.board-container');
console.log(startButton, boardContainer);
let state = true;
let board;
const infoUtente = document.getElementById('info');


startButton.addEventListener('click', function () {
    if (!state) {
        board.remove();
        state = true;
    }

    if (state) {
        const select = document.getElementById('difficulty').value;
        console.log(select);

        board = myCreateDomElement('div', 'board', '')
        boardContainer.append(board);
        createByDifficulty(select);
        infoUtente.classList.add('inactive');
        state = false;
    }

})


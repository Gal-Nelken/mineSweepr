'use strict'

function timerSet() {
    if (!gGame.isOn || gGame.isWin) return
    var elTimer = document.querySelector(".timer")
    var currTime = Date.now();
    var timer = Math.round((currTime - gStartTime) / 1000)
    elTimer.innerHTML = timer;
    return timer;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getElementData(elCell, board) {
    var i = +elCell.dataset.i;
    var j = +elCell.dataset.j;
    var currCell = board[i][j];
    return currCell
}

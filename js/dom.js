'use strict'

function renderBoard(mat, selector) {
    var strHTML = '<table><tbody>\n';
    for (var i = 0; i < mat.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < mat[0].length; j++) {
            var cellClass = `class="cell cell-${i}-${j}"`;
            strHTML += `<td onclick="cellClicked(this)" oncontextmenu="cellMarked(this)" data-i="${i}" data-j="${j}" ${cellClass}></td>\n`;
        }
        strHTML += '</tr>\n'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}


function printFlagCount() {
    var elFlag = document.querySelector('.mines-count span');
    elFlag.innerHTML = gGame.flagLeft
}


function printBtn() {
    var elBtn = document.querySelector('.game-tab button');
    if (gGame.isOn && !gGame.isWin) elBtn.innerHTML = '🙂';
    if (!gGame.isOn && gGame.isWin) elBtn.innerHTML = '😎';
    if (!gGame.isOn && !gGame.isWin) elBtn.innerHTML = '🤯';
}


function showMines() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[i].length; j++) {
            if (gBoard[i][j].isMine && !gBoard[i][j].IsShown) {
                var elMineCell = document.querySelector(`.cell-${i}-${j}`);
                elMineCell.innerHTML = MINE;
            }
        }
    }

}


function printLife() {
    var strHTML = LIFE;
    var elLife = document.querySelector('.life')
    for (var i = 1; i < gGame.life; i++) {
        strHTML += LIFE;
    }
    if (gGame.life < 1) strHTML = '🖤'
    elLife.innerHTML = strHTML;
}

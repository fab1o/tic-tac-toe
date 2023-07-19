function findWinnerRows(board) {
    // [0][0],[0][1],[0][2]
    // [1][0],[1][1],[1][2]
    // [2][0],[2][1],[2][2]

    let winner = null;

    for (let i = 0; i < board.length; i++) {
        if (winner == null) {
            for (let k = 0; k < board[i].length; k++) {
                if (board[i][k]) {
                    if (winner == null) {
                        winner = board[i][k];
                    } else if (winner !== board[i][k]) {
                        winner = null;
                        break;
                    }
                } else {
                    winner = null;
                    break;
                }
            }
        }
    }

    return winner;
}

function findWinnerCols(board) {
    // [0][0],[1][0],[2][0]
    // [0][1],[1][1],[2][1]
    // [0][2],[1][2],[2][2]

    let winner = null;

    for (let i = 0; i < board.length; i++) {
        if (winner == null) {
            for (let k = 0; k < board[i].length; k++) {
                if (board[k][i]) {
                    if (winner == null) {
                        winner = board[k][i];
                    } else if (winner !== board[k][i]) {
                        winner = null;
                        break;
                    }
                } else {
                    winner = null;
                    break;
                }
            }
        }
    }

    return winner;
}

function findWinnerDagonals(board) {
    // [0][0],[1][1],[2][2]
    // [0][2],[1][1],[2][0]

    let winner = null;

    for (let i = 0; i < board.length; i++) {
        if (board[i][i]) {
            if (winner == null) {
                winner = board[i][i];
            } else if (winner !== board[i][i]) {
                winner = null;
                break;
            }
        } else {
            winner = null;
            break;
        }
    }

    if (winner == null) {
        for (let i = 0; i < board.length; i++) {
            const diagonal = board[i][board.length - 1 - i];

            if (diagonal) {
                if (winner == null) {
                    winner = diagonal;
                } else if (winner !== diagonal) {
                    winner = null;
                    break;
                }
            } else {
                winner = null;
                break;
            }
        }
    }

    return winner;
}

function findWinner(board) {
    let winner = findWinnerRows(board);

    if (!winner) {
        winner = findWinnerCols(board);
    }

    if (!winner) {
        winner = findWinnerDagonals(board);
    }

    return winner;
}

function markBoard(board, currentMove, row, col) {
    if (board[row][col] == null) {
        const newBoard = Array.from(board);

        newBoard[row][col] = currentMove === 1 ? 'O' : 'X';

        return newBoard;
    }

    return null;
}

function isBoardFull(board) {
    for (let i = 0; i < board.length; i++) {
        for (let k = 0; k < board[i].length; k++) {
            if (board[i][k] == null) {
                return false;
            }
        }
    }

    return true;
}

export { findWinner, markBoard, isBoardFull };

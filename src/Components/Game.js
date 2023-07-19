import { useState } from 'react';

import Fireworks from '../Fireworks/Fireworks';

import Board from './Board';
import Reset from './Reset';

import { findWinner, markBoard, isBoardFull } from './engine';

import './Game.css';

function Game() {
    const [isFull, setIsFull] = useState(false);
    const [label, setLabel] = useState(null);
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);
    const [currentMove, setCurrentMove] = useState(0);

    function setupNextMove() {
        const newCurrentMove = currentMove + 1;

        setCurrentMove(newCurrentMove % 2);
    }

    function onPlay(row, col) {
        if (isFull === false && winner === null) {
            const newBoard = markBoard(board, currentMove, row, col);

            if (newBoard) {
                setBoard(newBoard);

                const winner = findWinner(board);
                if (winner) {
                    setLabel(`Winner: ${winner}`);
                } else {
                    setIsFull(isBoardFull(board));
                }
                setWinner(winner);
                setupNextMove();
            }
        }
    }

    return (
        <div>
            <div className="Game">
                <Board board={board} onPlay={onPlay} />
            </div>

            <Reset visible={!!winner || isFull} />
            <div className="Winner">{label}</div>
            <Fireworks visible={!!winner} />
        </div>
    );
}

export default Game;

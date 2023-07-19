import Box from './Box';

import './Board.css';

function Board({ board, onPlay }) {
    function onBoxClick(row, col) {
        onPlay(row, col);
    }

    return (
        <div className="Board">
            <div className="row">
                <Box value={board[0][0]} onBoxClick={() => onBoxClick(0, 0)} />
                <Box value={board[0][1]} onBoxClick={() => onBoxClick(0, 1)} />
                <Box value={board[0][2]} onBoxClick={() => onBoxClick(0, 2)} />
            </div>
            <div className="row">
                <Box value={board[1][0]} onBoxClick={() => onBoxClick(1, 0)} />
                <Box value={board[1][1]} onBoxClick={() => onBoxClick(1, 1)} />
                <Box value={board[1][2]} onBoxClick={() => onBoxClick(1, 2)} />
            </div>
            <div className="row">
                <Box value={board[2][0]} onBoxClick={() => onBoxClick(2, 0)} />
                <Box value={board[2][1]} onBoxClick={() => onBoxClick(2, 1)} />
                <Box value={board[2][2]} onBoxClick={() => onBoxClick(2, 2)} />
            </div>
        </div>
    );
}

export default Board;

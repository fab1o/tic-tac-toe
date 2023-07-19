import './Box.css';

function Box({ value, onBoxClick }) {
    return (
        <button className="Box" onClick={onBoxClick}>
            {value}
        </button>
    );
}

export default Box;

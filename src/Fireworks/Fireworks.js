import './Fireworks.css';

function Fireworks({ visible }) {
    if (!visible) {
        return null;
    }

    return (
        <div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
        </div>
    );
}

export default Fireworks;

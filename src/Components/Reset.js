import './Reset.css';

function Reset({ visible }) {
    function onReset() {
        window.location.reload();
    }

    return (
        <div className="Reset">
            <button disabled={!visible} onClick={onReset}>
                Reset
            </button>
        </div>
    );
}

export default Reset;

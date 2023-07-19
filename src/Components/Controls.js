import Reset from './Reset';

import './Controls.css';

function Controls({ resetVisible }) {
    return (
        <div className="Controls">
            <Reset visible={resetVisible} />
            <Reset visible={resetVisible} />
            <Reset visible={resetVisible} />
        </div>
    );
}

export default Controls;

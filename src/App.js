import Game from './Components/Game';
import Video from './Components/Video';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="header">Tic Tac Toe</div>
            <div className="Container">
                <Video player="1" />
                <Game />
                <Video player="2" />
            </div>
        </div>
    );
}

export default App;

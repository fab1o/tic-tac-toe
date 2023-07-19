import { useState, useRef } from 'react';

import './Video.css';

function Video({ player }) {
    const [isStreaming, setIsStreaming] = useState(null);
    const video = useRef();

    async function start() {
        video.current.srcObject = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });

        setIsStreaming(true);
    }

    return (
        <div className="Video">
            <video ref={video} playsInline autoPlay muted height="200"></video>
            <div className="Start">
                <button
                    disabled={isStreaming}
                    onClick={async () => {
                        await start();
                    }}
                >
                    Player {player} Start
                </button>
            </div>
        </div>
    );
}

export default Video;

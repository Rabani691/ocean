import React from 'react';
import soundFile from './ocean-waves-112906.mp3'
import icon from './high-volume.png'

function AudioPlayer() {
    const audio = new Audio(soundFile);

    const playAudio = () => {
        if(!window.a){
            window.a = 1
            audio.play();
        }
        else {
            window.a = 0
            audio.pause();
        }
    };


    return (

        <div  >
            <button onClick={playAudio} class="audio-button"  ><img src={icon} alt="Play Audio" className="audio-icon" /></button>
            
        </div>
    );
}

export default AudioPlayer;

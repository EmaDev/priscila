import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {CgPlayButton, CgPlayPause} from 'react-icons/cg';

const AudioContenedor = styled.div`
   margin:0 auto;
   display: flex;
   align-items:center;
   justify-content:center;
   p{
    margin: 0;
    font-size: 24px;
   }
`;

export const Reproductor = () => {
    const [audioActivo, setAudioActivo] = useState(false);
    const audioRef = useRef(null);
    const pausar = () => {
        const audio = audioRef.current;
        audio.play();
        setAudioActivo(true);

    }
    const resproducir = () => {
        const audio = audioRef.current;
        audio.pause();
        setAudioActivo(false);
    }
    return (
       <>
        <AudioContenedor>
            {(audioActivo) ? 
            <div onClick={resproducir} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CgPlayPause fontSize={'70px'} />
                <p style={{fontWeight: 'bold'}}>Escuchar</p>
            </div> 
            :
            <div onClick={pausar} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CgPlayButton fontSize={'70px'}/>
                <p style={{fontWeight: 'bold'}}>Pausar</p>
            </div>
            }
            
        </AudioContenedor>
        <audio src={require('../ntvg.mp3')} ref={audioRef} style={{display: 'none'}}/>
       </>
    )
}

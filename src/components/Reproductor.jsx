import React, { useState } from 'react';
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
    const [audioActivo, setAudioActivo] = useState(true);
    const pausar = () => {
        setAudioActivo(false);
    }
    const resproducir = () => {
        setAudioActivo(true);
    }
    return (
        <AudioContenedor>
            {(audioActivo) ? 
            <CgPlayPause fontSize={'70px'} onClick={pausar}/> 
            :
            <CgPlayButton fontSize={'70px'} onClick={resproducir}/>}
            <p>{audioActivo ? 'Pausar' : 'Escuchar'}</p>
        </AudioContenedor>
    )
}

import React, { useState } from 'react';
import styled from 'styled-components';
import {CgPlayButton, CgPlayPause} from 'react-icons/cg';

const AudioContenedor = styled.div`
   margin:auto;
   display: flex;
   align-items:center;
   justify-content:center;
`;

export const Reproductor = () => {
    const [audioActivo, setAudioActivo] = useState(true);
    return (
        <AudioContenedor>
            {(audioActivo) ? <CgPlayPause fontSize={'60px'}/> :<CgPlayButton fontSize={'60px'}/>}
            <p>{audioActivo ? 'Pausar' : 'Escuchar'}</p>
        </AudioContenedor>
    )
}

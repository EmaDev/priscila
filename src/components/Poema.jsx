import React from 'react';
import styled from 'styled-components';
import { Reproductor } from './Reproductor';

const Contenedor = styled.header`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Texto = styled.h4`
   width: 70%;
   text-align:center;
   font-family: 'La Belle Aurore', cursive;
   font-size: 18px;
   font-weight: bold;
   color: #000;
   margin: 10px 0;
`;

export const Poema = () => {
    return (
        <Contenedor className='poemaHeader'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', alignItems: 'center' }}>
                <Texto>Es 9 de diciembre nuestro segundo mes de novios,
                    me alegra tanto estar juntos a vos, aunque tuvimos muchas dudas con
                    nuestra relación yo nunca dude de mi amor por vos.
                    Me siento tan afortunado que me hayas elegido.
                    Sos lo más hermoso que me pasó en la vida.</Texto>
                <Texto>TE AMOU</Texto>
                <Texto>Se que soy pésimo para escribir, por eso te dejo esta canción que explica un poco mis sentimientos.</Texto>
                <Reproductor />
            </div>
        </Contenedor>
    )
}

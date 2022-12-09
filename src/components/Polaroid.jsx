import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
  display: block;
  width: 100%;
`;

const Tarjeta = styled.div`
  width: 100%;
  height: 380px;
  background-color: #fff;
  margin: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  box-shadow: 4px 8px 8px rgba(0,0,0,0.3);
`;

const TarjetaContenido = styled.div`
   margin:auto;
   width: 90%;
   height: 80%;
   background-color: #e1e1e1;
   border-radius: 1px solid rgba(0,0,0,0.3);
   margin-top: 20px;

   img{
    width: 100%;
    height: 100%;
   }
`;

export const Polaroid = ({url}) => {
    return (
        <Contenedor>
            <Tarjeta>
                <TarjetaContenido>
                  <img src={url}/>
                </TarjetaContenido>
            </Tarjeta>
        </Contenedor>
    )
}

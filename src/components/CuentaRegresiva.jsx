import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiLockClosed } from 'react-icons/hi';

const Numero = styled.p`
    font-family: 'Bebas Neue', cursive;
    font-size: 70px;
    font-weight: 900;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items:center;
`;
const Separador = styled.span`
   margin: auto 8px;
   font-size: 40px;
   font-wight: 900;
`;

const TextBloqueo = styled.p`
  margin: auto;
  text-align: center;
  display:flex;
  align-items:center;
  justify-content: center;
  color: #744481;
  .candado{
    margin: 0 8px;
  }
`;
export const CuentaRegresiva = () => {

    const [timerState, setTimerState] = useState({ dias: '', horas: '', minutos: '', segundos: '' });

    useEffect(() => {
        const actual = new Date();
        if (actual.getDate() === 9) {
            //clearInterval(intervalo);
            setTimerState({
                segundos: "00",
                minutos: "00",
                horas: "00",
                dias: "0",
            })
        } else {
            let iteracion = 1000;
            const intervalo = setInterval(() => {
                setTimer("Dec 09 2022 00:00:00 GMT-0300");
                if (iteracion === 1000) {
                    iteracion = 60000;
                }
            }, iteracion);
        }
    }, []);

    const setTimer = (fecha) => {
        const hoy = new Date();
        const fechaFin = new Date(fecha);
        const diferencia = (fechaFin - hoy + 1000) / 1000;
        setTimerState({
            segundos: ("0" + Math.floor(diferencia % 60)).slice(-2),
            minutos: ("0" + Math.floor(diferencia / 60 % 60)).slice(-2),
            horas: ("0" + Math.floor(diferencia / 3600 % 24)).slice(-2),
            dias: Math.floor(diferencia / (3600 * 24)).toString(),
        })
    }
    return (
        <div>
            <TextBloqueo><HiLockClosed className='candado' />podes desbloquearlo en</TextBloqueo>
            <div style={{ display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                <Numero>{timerState.dias}<Separador>:</Separador></Numero>
                <Numero>{timerState.horas}<Separador>:</Separador></Numero>
                <Numero>{timerState.minutos}<Separador>:</Separador></Numero>
                <Numero>{timerState.segundos}</Numero>
            </div>
        </div>
    )
}

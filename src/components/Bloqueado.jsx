import React from 'react';
import styled from 'styled-components';
import { CuentaRegresiva } from './CuentaRegresiva';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import Swal from 'sweetalert2';

const Contenedor = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #F7D6FF;
   margin: 0;
   display: flex;
   flex-direction:column;
   justify-content: center;
   align-items:center;
   margin:auto;
`;

const Alerta = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: #F0B2FF;
  margin:auto;
  border-radius: 10px;
  position: relative;
  box-shadow: 1px 10px 10px #6e4778;
   .icono{
    position:absolute;
    top: -28px;
    right: -10px;
    color: #E298F5;
    font-size: 100px;
   }
`;

const Titulo = styled.h2`
  text-align:center;
  font-weight: 900;
  font-size: 42px;
  margin: 8px auto;
  padding: 8px;
`;

const Corazones = styled.div`
  padding: 10px;
  margin: 0;
  margin-bottom: 8px;
  display:flex;
  justify-content:center;

  .corazon{
    color: #ca4058;
    font-size: 18px;
    margin: 0 10px;
  }
`;

const Button = styled.button`
    display: block;
    width: 60%;
    padding: 8px;
    margin: 10px auto;
    font-size: 16px;
    background-color: #e298f5;
    border-style: none;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
    border-radius: 6px;
    font-weight: bold;

    &:hover{
      background-color: #c37cd5;
    }
`;
export const Bloqueado = ({setBloqueo}) => {

  const ingresar = () => {
   const actual = new Date();
   if(actual.getDate() === 9){
    setBloqueo(false);
   }else{
    return Swal.fire({
      icon: 'error',
      title: 'No se puede ingresar en este momento',
    })
   }
  }
  return (
    <Contenedor>
      <Alerta>
      <BsFillSuitHeartFill className='icono'/>
        <Titulo>Te Amo</Titulo>
        <CuentaRegresiva/>
        <Corazones>
          <BsFillSuitHeartFill className='corazon'/>
          <BsFillSuitHeartFill className='corazon'/>
          <BsFillSuitHeartFill className='corazon'/>
          <BsFillSuitHeartFill className='corazon'/>
          <BsFillSuitHeartFill className='corazon'/>
        </Corazones>
        <Button onClick={ingresar}>Ingresar</Button>
      </Alerta>
    </Contenedor>
  )
}

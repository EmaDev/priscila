import React, { useEffect, useState } from 'react';
import {Bloqueado} from './components/Bloqueado';
import { Desbloquedado } from './components/Desbloquedado';


export const App = () => {
  const [estaBloquedo, setEstaBloquedo] = useState(true);
  
  /*useEffect ( () => {
   const actual = new Date();
   if(actual.getDate() === 8){
     setEstaBloquedo(false);
   }
  },[]);*/
  return (
     <div>
      {(estaBloquedo) ? <Bloqueado/> : <Desbloquedado/>}
      <span onClick={() => {setEstaBloquedo(false)}} style={{color: 'rgb(240, 158, 244)'}}>desbloquear</span>
     </div>
  )
}

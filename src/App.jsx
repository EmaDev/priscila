import React, { useEffect, useState } from 'react';
import {Bloqueado} from './components/Bloqueado';
import { Desbloquedado } from './components/Desbloquedado';


export const App = () => {
  const [estaBloquedo, setEstaBloquedo] = useState(true);
  
  return (
     <div>
      {(estaBloquedo) ? <Bloqueado setBloqueo={setEstaBloquedo}/> : <Desbloquedado/>}
     </div>
  )
}

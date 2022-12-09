import React from 'react';
import { Header } from './Header';
import { Poema } from './Poema';
import { PolaroidSlider } from './PolaroidSlider';

export const Desbloquedado = () => {
  return (
    <div>
        <Header/>
        <PolaroidSlider/>
        <Poema/>
    </div>
  )
}

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from'styled-components';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Polaroid } from "./Polaroid";
import {GiJasmine} from 'react-icons/gi';
import {BsSuitHeartFill} from 'react-icons/bs';


const Contenedor = styled.section`
  width: 100%;
  height: 100vh;
  background: rgb(255,157,180); 
  background: linear-gradient(180deg, rgba(255,157,180,1) 29%, rgba(255,157,254,1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin:auto;
  overflow: hidden;
  .contenido{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`;

const Titulo = styled.h2`
   font-size: 34px;
   margin: 0;
   padding: 0;
   color: #fff;
`;

const Iconos = styled.div`
  margin: 10px auto;
  margin-bottom: -20px;
  display: flex;
  gap: 15px;
  font-size: 22px;
`;
export const PolaroidSlider = () => {

    return (
        <Contenedor>
            <div className="contenido">
            <Titulo>Mi amorcito</Titulo>
            <Iconos>
                <GiJasmine color="#f0e58f"/>
                <BsSuitHeartFill color="#e76e77"/>
                <GiJasmine color="#f0e58f"/>
                <BsSuitHeartFill color="#e76e77"/>
                <GiJasmine color="#f0e58f"/>
            </Iconos>
            <div></div>
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                       <Polaroid url={require('../img/1.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/2.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/3.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/4.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/5.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/6.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/7.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/8.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/12.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/9.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/10.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/11.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/13.jpg')}/>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Polaroid url={require('../img/14.jpg')}/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Iconos style={{margin: '40px'}}>
                <GiJasmine color="#f0e58f"/>
                <BsSuitHeartFill color="#e76e77"/>
                <GiJasmine color="#f0e58f"/>
                <BsSuitHeartFill color="#e76e77"/>
                <GiJasmine color="#f0e58f"/>
            </Iconos>
        </Contenedor>
    );
}

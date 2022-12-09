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


const Contenedor = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #ecc1c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin:auto;
  overflow: hidden;
`;
export const PolaroidSlider = () => {

    return (
        <Contenedor>
            <div className="contentido">
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
        </Contenedor>
    );
}

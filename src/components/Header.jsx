import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from 'styled-components';

const Contenedor = styled.header`
   width: 100%;
   height: 100vh;
`;

const Contenido = styled.div`
   z-index: 1;
   margin:auto;
   width: 100%;
   height: 100vh;
   display: flex;
   position:relative;
   flex-direction: column;
   align-items: center;
   justify-content:center;
   overflow: hidden;
`;
const TextoUno = styled.h2`
  margin:0;
  font-size: 34px;
  color: #fff;
  text-transform: uppercase;
  text-align:center;
  font-family: 'Signika', sans-serif;
  font-weight: 700;
`;

const TeAmo = styled.h1`
  margin: 0;
  font-size: 72px;
  text-transform: uppercase;
  font-weigth: 700;
  color: #fff;
  font-family: 'Signika', sans-serif;
  font-weight: 700;
`;

const TextoDos = styled.h2` 
  margin:5px;
  font-size: 34px;
  color: #8edede;
  text-transform: uppercase;
  font-family: 'Signika', sans-serif;
  font-weight: 700;
  text-align:center;
`;

export const Header = () => {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    //await console.log(container);
  }, []);

  return (
    <Contenedor>
      <Particles style={{ zIndex: -1 }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          "fullScreen": {
            "zIndex": -1
          },
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40,
                "speed": 3
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 4
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 0,
              "value": 80
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": require('../img/corazon.png'),
                  "width": 32,
                  "height": 32
                },
              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "type": "none",
            "url": ""
          },
          "background": {
            "color": "#625775",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Contenido>
        <div style={{width: '90%', maxWidth: '500px', margin: 'auto', textAlign: 'center'}}>
        <TextoUno>Feliz segundo mes</TextoUno>
        <TextoDos>Priscilita de mi vida</TextoDos>
        <TeAmo>Te amo</TeAmo>
        <TextoDos>Te amo mucho, muchisimo</TextoDos>
        <br/>
        </div>
        <img src={require('../img/iconos/gatos.png')}
          style={{ position: 'absolute', width: '285px',
          right: '-10px', bottom: 0
          }}
        />
      </Contenido>
    </Contenedor>
  );
}

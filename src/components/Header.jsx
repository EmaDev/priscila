import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from 'styled-components';

const Contenedor = styled.header`
   width: 100%;
   height: 100vh;
   z-index: 1;
`;

export const Header = () => {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
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
                  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1125px-Love_Heart_symbol.svg.png",
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
            "color": "#fd9898",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
    </Contenedor>
  );
}

import React, { ReactElement } from 'react';
import { Marker } from 'react-map-gl';

function lengthToDegree(l: number): number {
     return (360 * l) / 40075161.2;
}

const SIZE = 20;

export function CustomMarker(props): ReactElement {
     const { longitude, latitude } = props;
     return (<>
          <Marker longitude={lengthToDegree(longitude)} latitude={lengthToDegree(latitude)} offsetLeft={10} offsetTop={10}>
               <svg
                    height={SIZE}
                    viewBox="0 0 24 24"
                    style={{
                         cursor: 'pointer',
                         fill: '#d00',
                         stroke: 'none',
                         transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                    }}
               >
                    <circle cx="10" cy="10" r="10" fill="red" />
               </svg>
          </Marker>
     </>
     );
}

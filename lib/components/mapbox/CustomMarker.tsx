import React, { ReactElement, CSSProperties } from 'react';
import { Marker } from 'react-map-gl';

function lengthToDegree(l: number): number {
     return (360 * l) / 40075161.2;
}

const style: CSSProperties = { backgroundColor: "red", width: '20px', height: '20px', borderRadius: '50%' }

export function CustomMarker(props): ReactElement {
     const { longitude, latitude } = props;
     return (<>
          <Marker longitude={lengthToDegree(longitude)} latitude={lengthToDegree(latitude)} offsetLeft={10} offsetTop={10}>
               <div style={style} />
          </Marker>
     </>
     );
}

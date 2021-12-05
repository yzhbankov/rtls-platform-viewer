import React, { ReactElement, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { ControlPanel, CustomMarker } from '../../../components/mapbox';
import { useWebSocket } from '../hooks';


export function SiteMap(): ReactElement {
     const { positions } = useWebSocket();
     const [viewport, setViewport] = useState({ latitude: 0, longitude: 0, zoom: 12 });
     return (
          <ReactMapGL
               {...viewport}
               width="85vw"
               height="90vh"
               onViewportChange={(nextViewport) => setViewport(nextViewport)}
               attributionControl={false}
          >
               <ControlPanel />
               {Object.values(positions).map(position => (
                    <CustomMarker
                         key={position.dev_id}
                         longitude={position.x}
                         latitude={position.y}
                    />
               ))}
          </ReactMapGL>
     );
}

SiteMap.propTypes = {};
SiteMap.defaultProps = {};

import React, { ReactElement } from 'react';
import { ScaleControl, FullscreenControl, NavigationControl } from 'react-map-gl';


const fullscreenControlStyle = {
     top: 36,
     left: 0,
     padding: '10px'
};
const navStyle = {
     top: 72,
     left: 0,
     padding: '10px'
};
const scaleControlStyle = {
     bottom: 36,
     left: 0,
     padding: '10px'
};

export function ControlPanel(): ReactElement {
     return (
          <>
               <FullscreenControl style={fullscreenControlStyle} />
               <NavigationControl style={navStyle} />
               <ScaleControl style={scaleControlStyle} />
          </>
     );
}

ControlPanel.propTypes = {};
ControlPanel.defaultProps = {};

import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

type MenuIconProps = {
     title: string;
     icon: ReactElement;
     onClick: () => void
}

export function MenuIcon({ title, onClick, icon }): ReactElement<MenuIconProps> {
     return (
          <div
               // todo: found some css framework
               style={{
                    width: '100px',
                    height: '100px',
                    display: 'inline-block',
                    color: '#444',
                    border: '1px solid #CCC',
                    background: '#DDD',
                    boxShadow: '0 0 5px -1px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    verticalAlign: 'middle',
                    padding: '5px',
                    textAlign: 'center'
               }}
               onClick={onClick}
          >
               <div>{title}</div>
               <div style={{ margin: '20px' }}>{icon}</div>
          </div>
     );
}

MenuIcon.propTypes = {
     title: PropTypes.string,
     onClick: PropTypes.func,
     icon: PropTypes.object
};

MenuIcon.defualtProps = {
     title: '',
     onClick: () => { },
     icon: null
};

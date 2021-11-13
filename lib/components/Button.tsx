import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';


type ButtonProps = {
     label: string;
     children: ReactElement;
     onClick: () => void;
}

export function Button({ label, children, onClick }): ReactElement<ButtonProps> {
     return (
          <button color="inherit" onClick={onClick}>
               {children || label}
          </button>
     );
}

Button.propTypes = {
     label: PropTypes.string,
     children: PropTypes.object,
     onClick: PropTypes.func
};

Button.defaultProps = {
     label: '',
     children: null,
     onClick: () => {},
};

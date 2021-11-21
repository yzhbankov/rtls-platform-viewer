import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';


type ButtonProps = {
     label: string;
     children: ReactElement;
     onClick: () => void;
}

export function Button({ label, children, onClick }): ReactElement<ButtonProps> {
     return (
          <MuiButton variant="contained" onClick={onClick}>
               {children || label}
          </MuiButton>
     );
}

Button.propTypes = {
     label: PropTypes.string,
     children: PropTypes.arrayOf(PropTypes.any),
     onClick: PropTypes.func
};

Button.defaultProps = {
     label: '',
     children: null,
     onClick: () => {},
};

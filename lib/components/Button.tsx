import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';


type ButtonProps = {
     label: string;
     children: ReactElement;
     onClick: () => void;
     disabled: boolean;
}

export function Button({ label, children, onClick, disabled }): ReactElement<ButtonProps> {
     return (
          <MuiButton variant="contained" onClick={onClick} disabled={disabled}>
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

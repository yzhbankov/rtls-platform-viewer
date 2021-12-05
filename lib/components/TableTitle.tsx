import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

export function TableTitle({ children }): ReactElement {
     return <div style={{ fontSize: '1.5em', fontFamily: 'Roboto' }}>{children}</div>
}

TableTitle.propTypes = {
     children: PropTypes.string
};
TableTitle.defaultProps = {
     children: null,
};

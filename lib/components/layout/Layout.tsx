import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

type LayoutProps = {
     sideBarRender: () => ReactElement;
     contentRender: () => ReactElement;
}

export function Layout(props): ReactElement<LayoutProps> {
     const { sideBarRender, contentRender } = props;
     return (
     <div>
          {sideBarRender()}
          {contentRender()}
     </div>
     )
}

Layout.propTypes = {
     sideBarRender: PropTypes.func,
     contentRender: PropTypes.func,
};

Layout.defaultProps = {
     sideBarRender: () => null,
     contentRender: () => null,
};

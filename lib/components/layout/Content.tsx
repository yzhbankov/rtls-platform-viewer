import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

type ContentProps = {
     innerContentRender: () => ReactElement
}
export function Content({ innerContentRender }): ReactElement<ContentProps> {
     return (<div>{innerContentRender()}</div>)
}

Content.propTypes = {
     innerContentRender: PropTypes.func
};

Content.defualtProps = {
     innerContentRender: () => null
};

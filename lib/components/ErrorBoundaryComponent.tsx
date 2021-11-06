import React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
     return (
          <div role="alert">Something went wrong</div>
     )
}

export function ErrorBoundaryComponent ({ children }) {
     return (
          <ErrorBoundary
               FallbackComponent={ErrorFallback}
               onError={(error, errorInfo) => {
                    // save error in logger
               }}
               onReset={() => {
                    // reset the state of your app so the error doesn't happen again
               }}
          >
               {children}
          </ErrorBoundary>
     )
}

ErrorBoundaryComponent.defaultProps = {
     children: PropTypes.element
};

ErrorBoundaryComponent.propTypes = {
     children: null
};

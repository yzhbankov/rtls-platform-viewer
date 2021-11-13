import React, {ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';


function ErrorFallback({ error, resetErrorBoundary }): ReactElement<FallbackProps> {
     return (
          <div role="alert">Something went wrong</div>
     )
}

type BoundaryProps = {
     children: React.ReactNode
}

export function ErrorBoundaryComponent({ children }): ReactElement<BoundaryProps> {
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
     children: PropTypes.object
};

ErrorBoundaryComponent.propTypes = {
     children: null
};

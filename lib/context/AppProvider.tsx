import React from "react";
import PropTypes from 'prop-types';
import { AppContext } from './AppContext';
import { client } from '../api';
import { appPersistantStorage } from '../utils';


export function AppProvider({ children }) {
     return (
          <AppContext.Provider value={{ api: client, logger: null, persistanceStorage: appPersistantStorage }} >
               {children}
          </AppContext.Provider>
     )
}

AppProvider.propTypes = {
     children: PropTypes.shape({}),
}

AppProvider.defaultProps = {
     children: null,
}

import { createContext } from 'react';


export const AppContext = createContext({
     api: null,
     logger: null,
     persistanceStorage: null
})

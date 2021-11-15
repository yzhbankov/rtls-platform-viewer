import { createContext, Context } from 'react';
import { IAppPersistantStorage } from '../utils'
import { IClientApi } from '../api';


type AppContextType = {
     api: IClientApi;
     logger: any;
     persistanceStorage: IAppPersistantStorage
}

export const AppContext: Context<AppContextType> = createContext({
     api: null,
     logger: null,
     persistanceStorage: null
})

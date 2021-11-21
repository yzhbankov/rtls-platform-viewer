import { useContext, useState } from 'react';
import { AppContext } from '../../../context';
import { useNavigation } from '../../nav/hooks';

type AuthHookType = {
     error: any;
     login: (params: any) => void;
     logout: () => void;
     checkSession: () => void;
     hasToken: boolean;
     loggingInProcess: boolean,
};

export function useAuth(): AuthHookType {
     const { api, persistanceStorage } = useContext(AppContext)
     const [loggingInProcess, setLoggingInProcess] = useState(false);
     const [error, setError] = useState(null);
     const { navigate } = useNavigation();

     const login = (params) => {
          setLoggingInProcess(true);
          return api.auth
               .login(params)
               .then((result) => {
                    persistanceStorage.apiToken = result.token
               })
               .catch((err) => {
                    setError(err);
                    persistanceStorage.apiToken = null
               })
               .finally(() => {
                    setLoggingInProcess(false);
               })
     }

     const logout = () => {
          persistanceStorage.apiToken = null
          navigate('login');
     }

     const checkSession = () => {
          const lastPath = persistanceStorage.lastRoutePath
          const token = persistanceStorage.apiToken

          if (token) {
               login({ token }).then(() => {
                    navigate(lastPath);
               })
          }
     }

     return {
          error,
          login,
          logout,
          checkSession,
          hasToken: Boolean(persistanceStorage.apiToken), // implement in smart way
          loggingInProcess,
     }
}

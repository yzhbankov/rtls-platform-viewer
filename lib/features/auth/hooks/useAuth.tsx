import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context';

export function useAuth() {
     const { api, persistanceStorage } = useContext(AppContext)
     const [loggingInProcess, setLoggingInProcess] = useState(false);
     const [error, setError] = useState(null);
     const navigate = useNavigate();

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

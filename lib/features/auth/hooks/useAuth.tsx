import { useContext } from 'react'
import { AppContext } from '../../../context'

export function useAuth() {
     const { api, persistanceStorage } = useContext(AppContext)

     const login = (params) => {
          return api.auth
               .login(params)
               .then((result) => {
                    persistanceStorage.apiToken = result.token
               })
               .catch((err) => {
                    persistanceStorage.apiToken = null
               })
     }
     const logout = () => {
          persistanceStorage.apiToken = null
     }

     const checkSession = () => {
          const lastPath = persistanceStorage.lastRoutePath
          const token = persistanceStorage.apiToken

          if (token) {
               login({ token }).then(() => {
                    // todo: navigate to last known public path
                    // history.push(lastPath)
               })
          }
     }

     return {
          login,
          logout,
          checkSession,
     }
}

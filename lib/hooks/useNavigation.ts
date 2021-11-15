import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context'

type NavigationHookType = {
     goBack: () => void;
     navigate: (path: string) => void;
}

export function useNavigation(): NavigationHookType {
     const { persistanceStorage } = useContext(AppContext)
     const location = useLocation();
     const navigate = useNavigate();
     useEffect(() => {
          persistanceStorage.lastRoutePath = location.pathname;
     }, [location]);

     return {
          goBack: () => navigate(-1),
          navigate: (path) => navigate(path)
     }
}

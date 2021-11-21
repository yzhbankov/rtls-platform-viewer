import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../../../context'

type NavigationHookType = {
     currentPage: string;
     goBack: () => void;
     navigate: (path: string) => void;
}

const Pages: { [key: string]: string } = {
     '/home': 'Home',
     '/admin': 'Admin',
     '/admin/trackables': 'Trackables',
     '/admin/anchors': 'Anchors',
     '/admin/locations': 'Locations',
     '/admin/sublocations': 'Sublocations',

}

export function useNavigation(): NavigationHookType {
     const { persistanceStorage } = useContext(AppContext)
     const location = useLocation();
     const navigate = useNavigate();
     useEffect(() => {
          persistanceStorage.lastRoutePath = location.pathname;
     }, [location]);

     return {
          currentPage: Pages[location.pathname],
          goBack: () => navigate(-1),
          navigate: (path) => navigate(path)
     }
}

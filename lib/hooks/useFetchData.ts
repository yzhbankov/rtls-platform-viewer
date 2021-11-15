import { useReducer, useEffect } from 'react'

type FetchDataState = {
     data: any;
     isLoading: boolean;
     isError: boolean;
}

type FetchDataAction = {
     type: string;
     payload?: any;
}


export function useFetchData(fetch: () => Promise<any>): FetchDataState {
     const fetchDataState: FetchDataState = { data: null, isLoading: false, isError: false };
     const fetchDataReducer = (_state: FetchDataState, action: FetchDataAction) => {
          switch (action.type) {
               case 'FETCH_INIT': {
                    return { ..._state, isLoading: true, isError: false }
               }
               case 'FETCH_SUCCESS': {
                    return { ..._state, isLoading: false, isError: false, data: action.payload }
               }
               case 'FETCH_FAILURE': {
                    return { ..._state, isLoading: false, isError: action.payload }
               }
               default:
                    return _state
          }
     };
     const [state, dispatch] = useReducer(fetchDataReducer, fetchDataState);

     useEffect(() => {
          dispatch({ type: 'FETCH_INIT' });
          fetch()
               .then((result) => {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result })
               })
               .catch((error) => {
                    dispatch({ type: 'FETCH_FAILURE', payload: error })
               })
     }, []);

     return state;
}

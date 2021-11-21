import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AppContainer } from './app/AppContainer';
import { AppProvider } from './context';
import { ErrorBoundaryComponent } from './components';
import './index.css'

const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         refetchOnWindowFocus: false,
       },
     },
   })

ReactDom.render(
     <BrowserRouter>
          <QueryClientProvider client={queryClient}>
               <AppProvider>
                    <ErrorBoundaryComponent>
                         <AppContainer />
                    </ErrorBoundaryComponent>
               </AppProvider>
               <ReactQueryDevtools initialIsOpen={false} /> 
          </QueryClientProvider>
     </BrowserRouter>,
     document.getElementById('app')
)

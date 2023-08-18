
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import ApiContextProvider from './context/ApiContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <>
        <Header/>
        <QueryClientProvider client={queryClient}>
          <ApiContextProvider>
            <Outlet/>
          </ApiContextProvider>
        </QueryClientProvider>
      </>
  );
}

export default App;

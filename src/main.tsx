import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { SchoolDataProvider } from './context/SchoolDataContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SchoolDataProvider>
      <App />
    </SchoolDataProvider>
  </StrictMode>,
);


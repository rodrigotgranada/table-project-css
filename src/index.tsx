import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes/Routes';
import { EmployeeProvider } from './context/EmployeeContext';
import Header from './components/layout/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
      <Header />
        <div className="mt-16"> 
          <AppRoutes />
        </div>
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

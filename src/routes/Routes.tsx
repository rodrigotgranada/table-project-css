import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import App from '../App';
import EmployeeDetails from '../features/employees/pages/EmployeeDetails';
import About from '../pages/About';

const AppRoutes: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>

  );
};

export default AppRoutes;

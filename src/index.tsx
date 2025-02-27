import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/Routes";
import { EmployeeProvider } from "./context/EmployeeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
        <AppRoutes />
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

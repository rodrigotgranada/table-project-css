import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Layout from "../components/layout/Layout";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;

import React from "react";
import Header from "./Header";
import "./styles/Layout.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
    </div>
  );
};

export default Layout;

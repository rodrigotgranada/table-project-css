import React from "react";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray00">
      <Header />
      <main className="flex-grow container mx-auto p-0 px-[1.25rem] md:px-[2rem] w-full bg-gray00">
        {children}
      </main>
    </div>
  );
};

export default Layout;

import React from "react";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray00">
      <Header />
      <main className="flex-grow w-full bg-gray00 px-[calc(1rem+10px)] sm:px-[calc(2rem+10px)] md:px-[calc(4.375rem+10px)] lg:px-[calc(6rem+10px)] xl:px-[calc(8rem+10px)] container mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;

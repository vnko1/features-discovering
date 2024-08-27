import React from "react";
import Header from "./components";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 bg-black h-screen">
      <Header />
      {children}
    </div>
  );
}

export default Layout;

import React from "react";
import Header from "./Header";

function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      {modal}
    </div>
  );
}

export default Layout;

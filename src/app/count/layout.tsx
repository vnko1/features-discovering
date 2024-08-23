import React, { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Layout;

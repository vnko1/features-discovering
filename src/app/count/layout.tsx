import React, { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return <StoreProvider initialValue={1000}>{children}</StoreProvider>;
};

export default Layout;

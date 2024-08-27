import React from "react";
import Tab from "../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex gap-10 mb-10">
        <Tab href={"/slots"}>First</Tab>
        <Tab href={"/slots/sec"}>Second</Tab>
        <Tab href={"/slots/third"}>Third</Tab>
      </nav>
      <div className="mb-10 text-center">{children}</div>
    </>
  );
}

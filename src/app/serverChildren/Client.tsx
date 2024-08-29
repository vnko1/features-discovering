"use client";
import React from "react";
import Title from "./Title";

function Client({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Title /> */}
      {children}
    </div>
  );
}

export default Client;

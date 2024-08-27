import React from "react";

function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-appear p-4">{children}</div>;
}

export default Template;

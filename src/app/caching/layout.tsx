import Link from "next/link";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10">
      <nav className="mb-10">
        <Link href={"/caching/test"}>Test</Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;

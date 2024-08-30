import Link from "next/link";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="mb-10">
        <Link href={"/caching"}>Back</Link>
      </nav>
      {children}
    </>
  );
}

export default Layout;

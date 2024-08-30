import Link from "next/link";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10">
      <nav className="mb-10 flex gap-10">
        <Link href={"/caching/test"}>Test</Link>
        <Link href={"/caching/fetch-cache"}>Fetch cache</Link>
        <Link href={"/caching/unstable-cache"}>Unstable cache</Link>
        <Link href={"/caching/no-store"}>No store</Link>
        <Link href={"/caching/product/1"}>Product</Link>
      </nav>
      {children}
    </div>
  );
}

export default Layout;

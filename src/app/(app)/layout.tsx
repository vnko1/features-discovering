import Link from "next/link";
import React from "react";

function Layout({
  children,
  tabs,
}: {
  children: React.ReactNode;
  tabs: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10">
        <Link href={"/"}>Analytics</Link>
        <Link href={"/settings"}>Settings</Link>
      </nav>
      <div>{tabs}</div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;

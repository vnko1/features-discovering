"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab = ({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`p-1 border border-red-100 bg-cyan-300 transition-all duration-150 ${
        pathname === href ? "bg-red-500" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Tab;

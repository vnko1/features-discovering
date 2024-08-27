import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="animate-slide bg-secondary flex items-center gap-4 h-12 rounded-xl p-4 text-primary">
      <Link href={"/animation"}>Home</Link>
      <Link href={"/animation/about"}>About</Link>
      <Link href={"/animation/contact"}>Contact</Link>
    </header>
  );
};

export default Header;

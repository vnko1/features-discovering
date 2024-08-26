import React from "react";

function Layout({
  children,
  tabs,
}: {
  children: React.ReactNode;
  tabs: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex flex-col p-10 items-center justify-around text-white bg-black">
      <header>Header</header>
      <main className="text-center">
        {tabs}
        {children}
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default Layout;

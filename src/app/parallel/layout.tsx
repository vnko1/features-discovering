import React from "react";
import Header from "./Header";

function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  views: React.ReactNode;
}) {
  return (
    <div className="p-8">
      <Header />
      {children}
      <div className="flex gap-4 py-4">
        {team}
        {analytics}
      </div>
    </div>
  );
}

export default Layout;

import Link from "next/link";
import React from "react";

const tabs = [1, 2, 3, 4];

const Page = ({
  searchParams,
}: {
  searchParams: { tab: string | undefined };
}) => {
  const { tab } = searchParams;
  console.log("🚀 ~ Page ~ tab:", tab);
  return (
    <div className="w-full h-screen p-4">
      <div className="flex gap-3">
        {tabs.map((tab) => (
          <Link
            key={tab}
            href={{ pathname: "/tabs", query: { tab: tab + "" } }}
          >
            Tab {tab}
          </Link>
        ))}
      </div>

      <div className="pt-4"></div>
    </div>
  );
};

export default Page;

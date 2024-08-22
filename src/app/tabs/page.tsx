import Link from "next/link";
import React from "react";

const Tab = ({ value }: { value: number }) => {
  return <div>Tab body {value}</div>;
};

const tabs = [
  { node: <Tab value={1} /> },
  { node: <Tab value={2} /> },
  { node: <Tab value={3} /> },
  { node: <Tab value={4} /> },
  { node: <Tab value={5} /> },
];

const Page = ({ searchParams }: { searchParams: { tab?: string } }) => {
  const activeTabIndex = Math.max(
    1,
    Math.min(Number(searchParams.tab) || 1, tabs.length)
  );

  return (
    <div className="w-full h-screen p-4">
      <div className="flex gap-3">
        {tabs.map((_, i) => (
          <Link
            key={i}
            href={{ pathname: "/tabs", query: { tab: i + 1 } }}
            className={`p-1 border border-red-100 bg-cyan-300 transition-all duration-150 ${
              activeTabIndex === i + 1 ? "bg-red-500" : ""
            }`}
          >
            Tab link {i + 1}
          </Link>
        ))}
      </div>

      <div className="pt-4">{tabs[activeTabIndex - 1].node}</div>
    </div>
  );
};

export default Page;

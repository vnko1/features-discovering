import Link from "next/link";
import React from "react";

function DeclinedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/pay"}>RETRY</Link>
    </main>
  );
}

export default DeclinedPage;

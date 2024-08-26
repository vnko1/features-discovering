import Link from "next/link";
import React from "react";

function DefaultPage() {
  return (
    <div>
      <div>Some Page</div>
      <Link href={"/tabs"}>Tabs</Link>
    </div>
  );
}

export default DefaultPage;

import Link from "next/link";
import React from "react";

function DefaultPage() {
  return (
    <div>
      Analytics page <Link href={"/par/settings"}>Sets link</Link>
    </div>
  );
}

export default DefaultPage;

import React from "react";

type Time = { dateTime: string };

async function Page() {
  const res = await fetch(
    "https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam",
    {
      //   next: { revalidate: 5 },
      cache: "no-store",
    }
  );

  const data: Time = await res.json();

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl">Date</h1>
      <p className="font-bold text-2xl">{data.dateTime}</p>
    </div>
  );
}

export default Page;

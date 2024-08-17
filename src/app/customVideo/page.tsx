import axios from "axios";
import React from "react";

async function Page() {
  const res = await axios(
    "http://localhost:1337/api/upload/files?filters[name][$eqi]=безкоштовний урок"
  );

  return (
    <main className="flex h-screen items-center justify-between p-24 bg-white">
      <div className="w-[680px] h-[420px] mx-auto ">
        <video
          src={res.data[0].url}
          controls
          className="rounded-lg"
          //   loop
          //   autoPlay
          //   poster={res.data[0].previewUrl}
        />
      </div>
    </main>
  );
}

export default Page;

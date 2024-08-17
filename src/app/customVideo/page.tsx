"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Page() {
  const [url, setUrl] = useState<string | null>(null);
  const playerRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (playerRef.current) playerRef.current.play();
  };

  const handlePause = () => {
    if (playerRef.current) playerRef.current.pause();
  };

  useEffect(() => {
    axios(
      "http://localhost:1337/api/upload/files?filters[name][$eqi]=безкоштовний урок"
    ).then((res) => setUrl(res.data[0].url));
  }, []);

  return (
    <main className="flex h-screen items-center justify-between p-24 bg-white">
      {url && (
        <div className="w-[680px] h-[420px] mx-auto ">
          <video
            src={url}
            // controls
            className="rounded-lg"
            //   loop
            //   autoPlay
            //   poster={res.data[0].previewUrl}
          />
        </div>
      )}

      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </main>
  );
}

export default Page;

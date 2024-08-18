"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Page() {
  const [url, setUrl] = useState<string | null>(null);
  const [showControl, setShowControl] = useState(false);
  const playerRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
      setShowControl(true);
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      setShowControl(false);
    }
  };

  useEffect(() => {
    axios(
      "http://localhost:1337/api/upload/files?filters[name][$eqi]=безкоштовний урок"
    ).then((res) => setUrl(res.data[0].url));
  }, []);

  return (
    <main className="flex h-screen items-center justify-between p-24 ">
      {url && (
        <div className="w-[680px] h-[420px] mx-auto ">
          <video
            ref={playerRef}
            src={url}
            controls={showControl}
            className="rounded-lg"
            width={400}
            height="200px"
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

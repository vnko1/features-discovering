"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

function Page() {
  const [url, setUrl] = useState<string | null>(null);
  const videoRef = useRef<ReactPlayer | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.getInternalPlayer()?.play();
    }
  };
  useEffect(() => {
    axios(
      "http://localhost:1337/api/upload/files?filters[name][$eqi]=безкоштовний урок"
    ).then((res) => setUrl(res.data[0].url));
  }, []);
  return (
    <main className="flex h-screen items-center justify-between p-24 ">
      {url ? (
        <ReactPlayer
          style={{ borderRadius: "50px" }}
          ref={videoRef}
          url={url}
          //   wrapper={}
          width="400px"
          height="400px"
          light={false}
        />
      ) : null}
      <button onClick={handlePlay}>PLAY</button>
    </main>
  );
}

export default Page;

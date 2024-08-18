"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

type Video = { url: string; previewUrl: string; [key: string]: string };

function Page() {
  const [video, setVideo] = useState<null | Video>(null);

  useEffect(() => {
    axios(
      "http://localhost:1337/api/upload/files?filters[name][$eqi]=безкоштовний урок"
    ).then((res) => {
      setVideo(res.data[0]);
    });
  }, []);

  return (
    <main className="flex h-screen items-center justify-between p-24 ">
      {video ? (
        <ReactPlayer
          style={{ position: "relative" }}
          url={video.url}
          width="400px"
          height="750px"
          light={video.previewUrl}
          controls
          playIcon={<button className="absolute bottom-0 right-0">PLAY</button>}
          previewTabIndex={1}
        />
      ) : null}
    </main>
  );
}

export default Page;
// const videoRef = useRef<ReactPlayer | null>(null);

// const handlePlay = () => {
//   if (videoRef.current) {
//     videoRef.current.getInternalPlayer()?.play();
//   }
// };

// const handlePause = () => {
//   if (videoRef.current) {
//     videoRef.current.getInternalPlayer()?.pause();
//   }
// };
/* <button onClick={handlePlay}>PLAY</button>
      <button onClick={handlePause}>PAUSE</button> */

import React from "react";
import Player from "next-video/player";
import Video from "next-video";
import axios from "axios";

async function Page() {
  const { data } = await axios(
    "http://localhost:1337/api/upload/files?filters[name][$eqi]=безкоштовний урок"
  );
  const video = data[0];

  return (
    <main className="flex h-screen items-center justify-between p-24">
      <div className="w-full max-w-[900px] h-full max-h-[750px]">
        <Player
          defaultHiddenCaptions
          src={video.url}
          autoPlay
          muted

          //   poster={video.previewUrl}
        />
      </div>
    </main>
  );
}

export default Page;

import React from "react";

function Page() {
  return (
    <main className="flex h-screen items-center justify-between p-24 bg-white">
      <div className="w-[680px] h-[420px] mx-auto rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/C8YtdC8mxTU?si=CorWK0hl5w7VL0t8&amp;controls=0&amp;showinfo=0&amp;autoplay=10&amp;modestbranding=1&amp;start=20"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </main>
  );
}

export default Page;

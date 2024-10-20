import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-3 flex-wrap">
        <Link href={"/request"}>Request page</Link>
        <Link href={"/fetch"}>FETCH page</Link>
        <Link href={"/pay"}>PAY page</Link>
        <Link href={"/markdown"}>Markdown</Link>
        <Link href={"/animate"}>Animate</Link>
        <Link href={"/video"}>Video</Link>
        <Link href={"/customVideo"}>CVideo</Link>
        <Link href={"/reactPlayer"}>RPlayer</Link>
        <Link href={"/nextVideo"}>NPlayer</Link>
        <Link href={"/slider"}>Slider</Link>
        <Link href={"/ratio"}>Ratio</Link>
        <Link href={"/text"}>Text</Link>
        <Link href={"/section"}>Section</Link>
        <Link href={"/cssCounter"}>CssCounters</Link>
        <Link href={"/order"}>Order</Link>
        <Link href={"/tabs"}>Tabs</Link>
        <Link href={"/clientTabs"}>CTabs</Link>
        <Link href={"/hover"}>Hover</Link>
        <Link href={"/count"}>Count</Link>
        <Link href={"/grid"}>Grid</Link>
        <Link href={"/slots"}>Slots</Link>
        <Link href={"/motion"}>Motion</Link>
        <Link href={"/animation"}>Animation</Link>
        <Link href={"/modal"}>MODAL</Link>
        <Link href={"/infinityScroll"}>Infinity Scroll</Link>
        <Link href={"/parallel"}>Parallel</Link>
        <Link href={"/responsive"}>Responsive</Link>
        <Link href={"/serverChildren"}>ServerChildren</Link>
        <Link href={"/suspense"}>Suspense</Link>{" "}
        <Link href={"/cache"}>Cache</Link>
        <Link href={"/caching"}>Caching</Link>
      </div>

      {process.env.customKey}
      {process.env.url}
    </main>
  );
}

import Image from "next/image";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default async function Home() {
  const {
    data: { article },
  } = await axios("http://localhost:1337/api/articles/5");

  return (
    <div>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: (props) => {
            return (
              <Image
                src={props.src || ""}
                alt={props.alt || ""}
                width={400}
                height={400}
              />
            );
          },
        }}
      >
        {article}
      </Markdown>
    </div>
  );
}

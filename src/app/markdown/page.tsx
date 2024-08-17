import Image from "next/image";
// import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default async function Home() {
  // const res = await axios("http://localhost:1337/api/articles/6");

  return (
    <div>
      <p>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            p: ({ children }) => {
              return <span>{children}</span>;
            },
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
          {null}
        </Markdown>
      </p>
    </div>
  );
}

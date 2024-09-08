import Image from "next/image";
import axios from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default async function Home() {
  const res = await axios("http://localhost:1337/api/articles/2");
  const data = res.data;

  const strongStyle = {
    color: "blue", // Change this to your desired color
    fontWeight: "bold", // You can customize the weight, size, etc.
  };
  return (
    <div>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ children }) => {
            return <span>{children}</span>;
          },
          strong: ({ children }) => {
            return <strong style={strongStyle}>{children}</strong>;
          },
          img: (props) => {
            return (
              <Image
                src={props.src || ""}
                alt={props.alt || ""}
                width={400}
                height={400}
                style={{ borderRadius: "50px" }}
              />
            );
          },
        }}
      >
        {data.article}
      </Markdown>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogInterface } from "@/types/interfaces/blog.interface";

import Tag from "./components/Tag/Tag";
import styles from "./BlogCard.module.scss";

function formatDate(date: Date) {
  if (!(date instanceof Date)) return null;
  return date
    .toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .replace(" р.", "");
}

interface BlogCardProps extends BlogInterface {
  className?: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  className,
  mainBanner,
  title,
  publishedAt,
  readTimeValue,
  tags,
  href,
  id,
}) => {
  const formattedDate = formatDate(publishedAt);
  const tagsArr = tags?.split(";");

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.thumb}>
        <Image
          src={mainBanner}
          alt={title}
          fill
          sizes='(max-width: 768px) 75vw, (max-width: 1280px) 88vw, 33vw'
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          {formattedDate && (
            <>
              <p>{formattedDate}</p>
              <span>|</span>
            </>
          )}
          <p>{readTimeValue}</p>
        </div>
        <h2 className={styles.title}>{title}</h2>
        {tagsArr ? (
          <div className={styles.categories}>
            {tagsArr.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
  // return (
  //   <Link href={href + id} className={`${styles.card} ${className}`}>
  //     <div className={styles.thumb}>
  //       <Image
  //         src={mainBanner}
  //         alt={title}
  //         fill
  //         sizes='(max-width: 768px) 75vw, (max-width: 1280px) 88vw, 33vw'
  //         style={{ objectFit: "cover", objectPosition: "center" }}
  //       />
  //     </div>
  //     <div className={styles.content}>
  //       <div className={styles.meta}>
  //         {formattedDate && (
  //           <>
  //             <p>{formattedDate}</p>
  //             <span>|</span>
  //           </>
  //         )}
  //         <p>{readTimeValue}</p>
  //       </div>
  //       <h2 className={styles.title}>{title}</h2>
  //       {tagsArr ? (
  //         <div className={styles.tags}>
  //           {tagsArr.map((category, index) => (
  //             <Category key={index} category={category} />
  //           ))}
  //         </div>
  //       ) : null}
  //     </div>
  //   </Link>
  // );
};

export default BlogCard;

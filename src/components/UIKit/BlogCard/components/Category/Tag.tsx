// "use client";
import React from "react";
import Link from "next/link";

import { useEditSearchParams } from "../Tag/useEditSearchParams";

import styles from "./Tag.module.scss";

interface TagLinkProps {
  category: string;
  className?: string;
}
const searchParamName = "categories";

function setSearchParams(
  data: { [x: string]: string | string[] },
  separator = ","
) {
  const searchParams = new URLSearchParams();

  Object.keys(data).forEach((name) => {
    if (Array.isArray(data[name]))
      searchParams.set(name, data[name].join(separator));
    else searchParams.set(name, data[name]);
  });

  return searchParams.toString();
}

const Category: React.FC<TagLinkProps> = ({
  className,
  category,
}) => {
  return (
    <Link
      href={
        "/blog" +
        "?" +
        setSearchParams({
          categories: category,
          query: ["qwerty", "search"],
        })
      }
      className={`${styles.category} ${className}`}>
      {category}
    </Link>
  );
  // const onCategoryClick = useEditSearchParam(
  //   searchParamName,
  //   category,
  //   "/blog"
  // );
  // return (
  //   <button
  //     className={`${styles.category} ${className}`}
  //     onClick={onCategoryClick}>
  //     {category}
  //   </button>
  // );
};

export default Category;

"use client";
import React from "react";
import Link from "next/link";
import { useEditSearchParam } from "./useEditSearchParam";

import styles from "./Category.module.scss";

interface TagLinkProps {
  category: string;
  className?: string;
}
const searchParamName = "categories";

const Category: React.FC<TagLinkProps> = ({
  className,
  category,
}) => {
  // const searchParams = new URLSearchParams({
  //   categories: category,
  // });
  // return (
  //   <Link
  //     href={"/blog" + "?" + searchParams.toString()}
  //     className={`${styles.category} ${className}`}>
  //     {category}
  //   </Link>
  // );
  const onCategoryClick = useEditSearchParam(
    searchParamName,
    category,
    "/blog"
  );
  return (
    <button
      className={`${styles.category} ${className}`}
      onClick={onCategoryClick}>
      {category}
    </button>
  );
};

export default Category;

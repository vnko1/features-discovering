"use client";
import React from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onTagClick = () => {
    const params = new URLSearchParams(searchParams);

    category
      ? params.set(searchParamName, category.trim())
      : params.delete(searchParamName);
    replace(pathname + "?" + params.toString());
  };

  return (
    <button
      className={`${styles.category} ${className}`}
      onClick={onTagClick}>
      {category}
    </button>
  );
};

export default Category;

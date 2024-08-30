"use client";

import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

type ButtonColorType = "primary" | "secondary" | "accent";
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  color?: ButtonColorType;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = ({ children, href, ...props }) => {
  if (href) return <Link href={href}>{children}</Link>;
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;

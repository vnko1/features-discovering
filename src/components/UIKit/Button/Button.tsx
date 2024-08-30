"use client";

import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
import cn from "classnames";

type ButtonColorType = "primary" | "secondary" | "accent";
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  color?: ButtonColorType;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  color = "primary",
  ...props
}) => {
  const baseClassNames = cn(
    styles.button,
    {
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
      [styles.accent]: color === "accent",
    },
    className
  );

  if (href)
    return (
      <Link href={href} className={baseClassNames}>
        {children}
      </Link>
    );
  return (
    <button {...props} className={baseClassNames}>
      {children}
    </button>
  );
};

export default Button;

"use client";

import React, { ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";
import cn from "classnames";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";
import styles from "./Button.module.scss";

type ButtonColorType = "primary" | "secondary" | "accent";
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  color?: ButtonColorType;
  icon?: IconsEnum;
  iconSize?: number;
  alignIcon?: "left" | "right";
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  iconSize = 24,
  icon,
  color = "primary",
  alignIcon = "right",
  ...props
}) => {
  const buttonClassNames = cn(
    styles.button,
    {
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
      [styles.accent]: color === "accent",
    },
    { [styles.buttonLeft]: alignIcon === "left" },
    className
  );

  if (href)
    return (
      <Link href={href} className={buttonClassNames}>
        {children}
        {icon && <Icon icon={icon} size={iconSize} />}
      </Link>
    );
  return (
    <button {...props} className={buttonClassNames}>
      {children}
      {icon && <Icon icon={icon} size={iconSize} />}
    </button>
  );
};

export default Button;

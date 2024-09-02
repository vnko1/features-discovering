import React, { ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./Button.module.scss";

type ButtonColorType = "primary" | "secondary" | "accent";
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  color?: ButtonColorType;
  icon?: React.JSX.Element;
  alignIcon?: "left" | "right";
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  icon: Icon,
  color = "primary",
  alignIcon = "right",
  ...props
}) => {
  const buttonClassNames = cn(
    styles.button,
    styles[color],
    { [styles.buttonLeft]: alignIcon === "left" },
    className
  );

  if (href)
    return (
      <Link href={href} className={buttonClassNames}>
        {children}
        {Icon && Icon}
      </Link>
    );
  return (
    <button {...props} className={buttonClassNames}>
      {children}
      {Icon && Icon}
    </button>
  );
};

export default Button;

import React, { InputHTMLAttributes } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import cn from "classnames";

import styles from "./Input.module.scss";

type InputProps = Partial<InputHTMLAttributes<HTMLInputElement>>;

const Input = <T extends object>({
  className,
  ...props
}: UseControllerProps<T> & InputProps) => {
  const { field } = useController(props);

  const inputClassNames = cn(styles.field, className);

  return <input {...props} {...field} className={inputClassNames} />;
};

export default Input;

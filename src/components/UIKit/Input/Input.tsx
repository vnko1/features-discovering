"use client";

import React, { InputHTMLAttributes } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import cn from "classnames";

import styles from "./Input.module.scss";

type InputColorType = "primary" | "secondary";
type InputProps = { color?: InputColorType } & Partial<
  InputHTMLAttributes<HTMLInputElement>
>;

const Input = ({
  className,
  name,
  color = "primary",

  ...props
}: UseControllerProps<FieldValues> & InputProps) => {
  const { field, fieldState } = useController({
    ...props,
    name,
  });
  const { error, isTouched } = fieldState;

  const isErrorValidation = isTouched && error;
  const inputClassNames = cn(
    styles.field,
    {
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
    },
    { [styles.error]: isErrorValidation },
    className
  );

  return <input {...field} {...props} className={inputClassNames} />;
};

export default Input;

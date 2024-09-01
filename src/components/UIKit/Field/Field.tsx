"use client";

import React, { InputHTMLAttributes } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import cn from "classnames";

import { InputColorType } from "@/types";
import styles from "./Field.module.scss";

type FieldProps = { color?: InputColorType } & Partial<
  InputHTMLAttributes<HTMLInputElement>
>;

const Field = ({
  className,
  color = "primary",
  ...props
}: UseControllerProps<FieldValues> & FieldProps) => {
  const { field, fieldState } = useController(props);
  const { error } = fieldState;

  const inputClassNames = cn(
    styles.field,
    {
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
    },
    { [styles.error]: error },
    className
  );

  return (
    <label className={styles.label}>
      <input {...field} {...props} className={inputClassNames} />
    </label>
  );
};

export default Field;

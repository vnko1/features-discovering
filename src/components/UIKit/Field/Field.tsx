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

type FieldProps = UseControllerProps<FieldValues> & {
  color?: InputColorType;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;

const Field: React.FC<FieldProps> = ({
  className,
  color = "primary",
  ...props
}) => {
  const { field, fieldState } = useController(props);
  const { error } = fieldState;

  const inputClassNames = cn(
    styles.field,
    styles[color],
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

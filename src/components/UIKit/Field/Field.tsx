"use client";

import React, { InputHTMLAttributes } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import clsx from "clsx";

import { InputColorType } from "@/types";
import styles from "./Field.module.scss";

interface FieldProps
  extends UseControllerProps<FieldValues>,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "type" | "placeholder"
    > {
  color?: InputColorType;
  className?: string;
}

const Field: React.FC<FieldProps> = ({
  className,
  color = "primary",
  ...props
}) => {
  const { field, fieldState } = useController(props);
  const { error } = fieldState;

  const inputClassNames = clsx(
    styles.field,
    styles[color],
    { [styles.error]: error },
    className
  );

  return (
    <label className={styles.label}>
      <input
        {...field}
        {...props}
        value={field.value || ""}
        className={inputClassNames}
      />
    </label>
  );
};

export default Field;

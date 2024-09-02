"use client";

import React, { InputHTMLAttributes } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import clsx from "clsx";

import { InputColorType } from "@/types";
import styles from "./RadioButton.module.scss";

type RadioButtonProps = UseControllerProps<FieldValues> & {
  label: string;
  color?: InputColorType;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const RadioButton: React.FC<RadioButtonProps> = ({
  color = "primary",
  className,
  label,
  ...props
}) => {
  const { field } = useController(props);

  const radioBtnClassNames = clsx(
    styles.button,
    styles[color],
    className
  );
  return (
    <label className={styles.label}>
      <input
        {...field}
        {...props}
        type='radio'
        checked={props.value === field.value}
        className={styles.field}
      />
      <span className={radioBtnClassNames}>{label}</span>
    </label>
  );
};

export default RadioButton;

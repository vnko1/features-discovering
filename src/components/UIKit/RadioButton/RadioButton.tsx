"use client";

import React, { FC, InputHTMLAttributes } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import cn from "classnames";

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

  const radioBtnClassNames = cn(
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

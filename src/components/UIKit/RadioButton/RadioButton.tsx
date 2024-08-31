"use client";

import React, { FC, InputHTMLAttributes } from "react";
import cn from "classnames";

import { InputColorType } from "@/types";
import styles from "./RadioButton.module.scss";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type RadioButtonProps = {
  label: string;
  color?: InputColorType;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;

const RadioButton = ({
  color = "primary",
  className,
  label,
  ...props
}: UseControllerProps<FieldValues> & RadioButtonProps) => {
  const { field } = useController(props);

  const radioBtnClassNames = cn(
    styles.button,
    {
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
    },

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

"use client";
import React, { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { IconsEnum } from "@/types";
import { Input, Button } from "..";
import { FormProps } from "./Form.type";
import styles from "./Form.module.scss";

const Form: FC<FormProps> = ({
  className,
  values,
  fields,
  buttonText,
  onHandleSubmit,
  ...props
}) => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: values,
  });
  const submit = async (data: FieldValues) => {
    onHandleSubmit && onHandleSubmit(data);
  };
  return (
    <form
      {...props}
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(submit)}>
      <div className={styles.fieldsWrapper}>
        {fields.map((field, index) => (
          <Input key={index} control={control} {...field} />
        ))}
      </div>
      <Button color='accent' icon={IconsEnum.Arrow} type='submit'>
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;

"use client";
import React, { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IconsEnum } from "@/types";
import { Input, Button } from "..";
import styles from "./Form.module.scss";
import { ZodType } from "zod";

type FormProps = {
  values: FieldValues;
  fields: {
    name: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
  }[];
  schema: ZodType;
  buttonText: string;
  className?: string;
};

const Form: FC<FormProps> = ({
  className,
  values,
  fields,
  buttonText,
  schema,
}) => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: values,
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(onSubmit)}>
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

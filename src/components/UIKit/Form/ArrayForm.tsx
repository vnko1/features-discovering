"use client";
import React from "react";
import clsx from "clsx";

import styles from "./Form.module.scss";
import {
  useFieldArray,
  useForm,
  Controller,
  Form,
} from "react-hook-form";
import Field from "../Field/Field";
import Button from "../Button/Button";

const ArrayForm = ({ className }: { className?: string }) => {
  const { control } = useForm({
    defaultValues: {
      test: [
        {
          name: {
            value: "",
            placeholder: "Ім'я",
            rules: { required: true },
          },
        },
        {
          name: { value: "", placeholder: "Пошта" },
        },
      ],
    },
  });
  const { fields } = useFieldArray({ control, name: "test" });

  return (
    <Form
      control={control}
      onSubmit={(data) => {
        console.log(data.data);
      }}
      className={clsx(styles.form, className)}>
      <div className={styles.inputsWrapper}>
        {fields.map((item, index) => {
          console.log("🚀 ~ {fields.map ~ item:", item);
          return (
            <Field
              key={item.id}
              name={`test.${index}.name.value`}
              placeholder={item.name.placeholder}
              rules={item.name.rules}
              control={control}
            />
          );
        })}
      </div>
      <Button color='accent' type='submit'>
        SUBMIT
      </Button>
    </Form>
  );
};

export default ArrayForm;

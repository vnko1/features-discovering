"use client";
import React from "react";
import clsx from "clsx";

import styles from "./Form.module.scss";
import {
  useFieldArray,
  useForm,
  Form,
  FieldValues,
} from "react-hook-form";
import Field from "../Field/Field";
import Button from "../Button/Button";
import RadioButton from "../RadioButton/RadioButton";
import { RadioButtonsProps } from "./Form.type";

const RadioButtons: React.FC<RadioButtonsProps> = ({
  isError,
  inputs,
  labelText,
  ...props
}) => {
  if (!inputs) return null;

  return (
    <div className={styles.radioGroupsWrapper}>
      {labelText ? (
        <p
          className={clsx(styles.radioGroupsLabel, {
            [styles.error]: isError,
          })}>
          {labelText}
        </p>
      ) : null}
      <div className={styles.radioButtons}>
        {inputs.map((radio, index) => (
          <RadioButton key={index} {...props} {...radio} />
        ))}
      </div>
    </div>
  );
};

interface ContactField {
  value: string;
  placeholder: string;
  rules: {
    required: boolean;
  };
}

interface FormValues extends FieldValues {
  ["contactUs"]: ContactField[];
  contacts: string;
}

const ArrayForm = ({
  className,
  name = "contactUs",
}: {
  className?: string;
  name: string;
}) => {
  const { control } = useForm<FormValues>({
    defaultValues: {
      [name]: [
        {
          value: "",
          placeholder: "Ім'я",
          rules: { required: true },
        },
        {
          value: "",
          placeholder: "Пошта",
          rules: { required: true },
        },
      ],
      contacts: "",
    },
  });
  const { fields, append } = useFieldArray({ control, name });

  return (
    <Form
      control={control}
      onSubmit={(data) => {
        console.log("🚀 ~ data:", data.data);
      }}
      className={clsx(styles.form, className)}>
      <div className={styles.inputsWrapper}>
        <div className={styles.fieldsWrapper}>
          {fields.map((item, index) => {
            console.log("🚀 ~ {fields.map ~ item:", item);
            if (typeof item === "object") {
              return (
                <Field
                  key={item.id}
                  name={`${name}.${index}.value`}
                  placeholder={item.placeholder}
                  rules={item.rules}
                  control={control}
                />
              );
            }
            return null;
          })}
        </div>
        <div className={styles.radioGroupsWrapper}></div>
      </div>
      <Button color='accent' type='submit'>
        SUBMIT
      </Button>
      <Button
        color='accent'
        onClick={() => {
          append({
            value: "",
            placeholder: "Нік",
            rules: { required: true },
          });
        }}>
        ADD
      </Button>
    </Form>
  );
};

export default ArrayForm;
//  {
//         text: "Telegram",
//         value: "telegram",
//       },
//       {
//         text: "Viber",
//         value: "viber",
//       },
//       {
//         text: "WhatsApp",
//         value: "whatsApp",
//       },

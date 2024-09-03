"use client";
import React, { FC } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";
import clsx from "clsx";

import { formsVariant } from "@/constants";
import { Field, Button, RadioButton } from "..";
import {
  CustomFormProps,
  FormDataTypes,
  InputProps,
} from "./Form.type";
import styles from "./Form.module.scss";

const { initialValues, buttonText, textFields, radioButtons } =
  formsVariant;

const Fields: React.FC<InputProps> = ({ control, variant }) => (
  <div className={styles.fieldsWrapper}>
    {textFields[variant].map((field, index) => (
      <Field key={index} {...field} control={control} />
    ))}
  </div>
);

const RadioButtons: React.FC<InputProps> = ({
  control,
  isError,
  variant,
}) => {
  const data = radioButtons[variant];

  if (!data?.inputs) return null;

  return (
    <div className={styles.radioGroupsWrapper}>
      {data?.labelText ? (
        <p
          className={clsx(styles.radioGroupsLabel, {
            [styles.error]: isError,
          })}>
          {data.labelText}
        </p>
      ) : null}
      <div className={styles.radioButtons}>
        {data.inputs.map((radio, index) => (
          <RadioButton
            key={index}
            {...radio}
            control={control}
            name={data.name}
            rules={data.rules}
          />
        ))}
      </div>
    </div>
  );
};
const CustomForm: FC<CustomFormProps> = ({
  className,
  action,
  variant = "contactUs",
  handleSubmit,
  ...props
}) => {
  const { control, reset, formState } = useForm<FieldValues>({
    values: initialValues[variant],
  });

  const onHandleSubmit = async (data: FormDataTypes) => {
    if (typeof action === "function") action(data.formData);
    else if (handleSubmit) await handleSubmit(data);
    reset();
  };

  const isRadioButtonsError =
    !!formState.errors[radioButtons[variant]?.name];

  return (
    <Form
      {...props}
      control={control}
      onSubmit={onHandleSubmit}
      className={clsx(styles.form, className)}>
      <div className={styles.inputsWrapper}>
        <Fields control={control} variant={variant} />
        <RadioButtons
          control={control}
          isError={isRadioButtonsError}
          variant={variant}
        />
      </div>
      <Button color='accent' type='submit'>
        {buttonText[variant]}
      </Button>
    </Form>
  );
};

export default CustomForm;

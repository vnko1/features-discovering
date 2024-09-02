"use client";
import React, { FC } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";
import clsx from "clsx";

import { formsData } from "@/constants";
import { Field, Button, RadioButton } from "..";
import {
  CustomFormProps,
  FormDataTypes,
  InputProps,
} from "./Form.type";
import styles from "./Form.module.scss";

const Fields: React.FC<InputProps> = ({ control, variant }) => (
  <div className={styles.fieldsWrapper}>
    {formsData[variant].fields.inputs.map((field, index) => (
      <Field {...field} key={index} control={control} />
    ))}
  </div>
);

const RadioButtons: React.FC<InputProps> = ({
  control,
  isError,
  variant,
}) => {
  if (!formsData[variant]?.radioButtons) return null;
  return (
    <div className={styles.radioGroupsWrapper}>
      {
        <p
          className={clsx(styles.radioGroupsLabel, {
            [styles.error]: isError,
          })}>
          {formsData[variant].labelText}
        </p>
      }
      <div className={styles.radioButtons}>
        {formsData[variant].radioButtons.inputs.map(
          (radio, index) => (
            <RadioButton
              {...radio}
              key={index}
              control={control}
              name={formsData[variant].radioButtons.name}
            />
          )
        )}
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
    values: formsData[variant].initialValues,
  });

  const onHandleSubmit = async (data: FormDataTypes) => {
    if (typeof action === "function") {
      action(data.formData);
      return reset();
    }
    handleSubmit && (await handleSubmit(data.data));
    reset();
  };

  const isRadioButtonsError =
    !!formState.errors[formsData[variant]?.radioButtons.name];

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
        {formsData[variant].buttonText}
      </Button>
    </Form>
  );
};

export default CustomForm;

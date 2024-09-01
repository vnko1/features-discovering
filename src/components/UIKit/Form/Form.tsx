"use client";
import React, { FC } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";

import { IconsEnum } from "@/types";
import { Field, Button, RadioButton } from "..";
import {
  FieldsProps,
  CustomFormProps,
  RadioButtonsProps,
  FormDataTypes,
} from "./Form.type";
import styles from "./Form.module.scss";

const Fields: React.FC<FieldsProps> = ({ control, inputFields }) => (
  <div className={styles.fieldsWrapper}>
    {inputFields.map((field, index) => (
      <Field {...field} key={index} control={control} />
    ))}
  </div>
);

const RadioButtons: React.FC<RadioButtonsProps> = ({
  control,
  isError,
  radioButtons,
  radioButtonsLabel,
}) => {
  if (!radioButtons) return null;
  return (
    <div className={styles.radioGroupsWrapper}>
      {radioButtonsLabel ? (
        <p
          className={`${styles.radioGroupsLabel} ${
            isError ? styles.error : ""
          }`}>
          {radioButtonsLabel}
        </p>
      ) : null}
      <div className={styles.radioButtons}>
        {radioButtons.map((radio, index) => (
          <RadioButton {...radio} key={index} control={control} />
        ))}
      </div>
    </div>
  );
};
const CustomForm: FC<CustomFormProps> = ({
  className,
  formValues,
  buttonText,
  onSubmit,
  inputFields,
  radioButtons,
  radioButtonsLabel,
  action,
  ...props
}) => {
  const { control, reset, formState } = useForm<FieldValues>({
    defaultValues: formValues,
  });

  const onHandleSubmit = async (data: FormDataTypes) => {
    if (typeof action === "function") {
      action(data.formData);
      return reset();
    }
    onSubmit && (await onSubmit(data.data));
    reset();
  };

  const isRadioButtonsError = !!(
    radioButtons && formState.errors[radioButtons[0]?.name]
  );

  return (
    <Form
      {...props}
      control={control}
      className={`${styles.form} ${className}`}
      onSubmit={onHandleSubmit}>
      <div className={styles.inputsWrapper}>
        <Fields control={control} inputFields={inputFields} />
        <RadioButtons
          control={control}
          radioButtons={radioButtons}
          isError={isRadioButtonsError}
          radioButtonsLabel={radioButtonsLabel}
        />
      </div>
      <Button color='accent' icon={IconsEnum.Arrow} type='submit'>
        {buttonText}
      </Button>
    </Form>
  );
};

export default CustomForm;

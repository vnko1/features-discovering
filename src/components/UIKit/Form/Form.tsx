"use client";
import React, { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { IconsEnum } from "@/types";
import { Field, Button, RadioButton } from "..";
import {
  FieldsProps,
  FormProps,
  RadioButtonsProps,
} from "./Form.type";
import styles from "./Form.module.scss";

const Fields: React.FC<FieldsProps> = ({ control, inputFields }) => (
  <div className={styles.fieldsWrapper}>
    {inputFields.map((field, index) => (
      <Field key={index} control={control} {...field} />
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
          <RadioButton key={index} control={control} {...radio} />
        ))}
      </div>
    </div>
  );
};
const Form: FC<FormProps> = ({
  className,
  formValues,
  buttonText,
  onHandleSubmit,
  inputFields,
  radioButtons,
  radioButtonsLabel,
  ...props
}) => {
  const { control, handleSubmit, reset, formState } =
    useForm<FieldValues>({
      defaultValues: formValues,
    });

  const onSubmit = async (data: FieldValues) => {
    onHandleSubmit && (await onHandleSubmit(data));
    reset();
  };

  const isRadioButtonsError = !!(
    radioButtons && formState.errors[radioButtons[0]?.name]
  );

  return (
    <form
      {...props}
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};

export default Form;

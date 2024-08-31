"use client";
import React, { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { IconsEnum } from "@/types";
import { Field, Button, RadioButton } from "..";
import { FormProps } from "./Form.type";
import styles from "./Form.module.scss";

const Form: FC<FormProps> = ({
  className,
  values,
  fields,
  radioGroups,
  radioGroupsLabel,
  buttonText,
  onHandleSubmit,
  ...props
}) => {
  const { control, handleSubmit, reset, formState } =
    useForm<FieldValues>({
      defaultValues: values,
    });

  const submit = async (data: FieldValues) => {
    onHandleSubmit && (await onHandleSubmit(data));
    reset();
  };

  const radioGroupsErrorValidation = radioGroups
    ? formState.errors[radioGroups[0]?.name]
    : null;

  const renderFields = (
    <div className={styles.fieldsWrapper}>
      {fields.map((field, index) => (
        <Field key={index} control={control} {...field} />
      ))}
    </div>
  );

  const renderRadioButtons = radioGroups ? (
    <div className={styles.radioGroupsWrapper}>
      {radioGroupsLabel ? (
        <p
          className={`${styles.radioGroupsLabel} ${
            radioGroupsErrorValidation ? styles.error : ""
          }`}>
          {radioGroupsLabel}
        </p>
      ) : null}
      <div className={styles.radioButtons}>
        {radioGroups.map((radio, index) => (
          <RadioButton key={index} control={control} {...radio} />
        ))}
      </div>
    </div>
  ) : null;

  return (
    <form
      {...props}
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(submit)}>
      <div className={styles.inputsWrapper}>
        {renderFields}
        {renderRadioButtons}
      </div>
      <Button color='accent' icon={IconsEnum.Arrow} type='submit'>
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;

"use client";
import React, { FC, useEffect, useState } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";
import clsx from "clsx";

import { forms } from "@/constants";
import { Field, Button, RadioButton } from "..";
import {
  CustomFormProps,
  SubmitDataTypes,
  RadioButtonsProps,
  TextFieldsProps,
} from "./Form.type";
import styles from "./Form.module.scss";

const { initialValues, buttonText, textFields, radioButtons } = forms;

const TextFields: React.FC<TextFieldsProps> = ({
  inputs,
  ...props
}) => (
  <div className={styles.fieldsWrapper}>
    {inputs.map((field, index) => (
      <Field key={index} {...props} {...field} />
    ))}
  </div>
);

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

const CustomForm: FC<CustomFormProps> = ({
  className,
  action,
  variant = "contactUs",
  handleSubmit,
  ...props
}) => {
  const [initialValue, setInitialValue] = useState(
    initialValues[variant]
  );
  const [inputs, setInputs] = useState(textFields[variant]);

  const { control, reset, formState, watch } = useForm<FieldValues>({
    defaultValues: initialValue,
  });

  const contact = watch("contactType");
  const isRadioButtonsError =
    !!formState.errors[radioButtons[variant]?.name || ""];

  const onHandleSubmit = async (data: SubmitDataTypes) => {
    try {
      if (typeof action === "function") action(data.formData);
      else if (handleSubmit) await handleSubmit(data);
      reset();
      setInitialValue(initialValues[variant]);
      setInputs(textFields[variant]);
    } catch (error) {
      error;
    }
  };

  useEffect(() => {
    if (contact === "telegram") {
      setInitialValue((state) => ({ ...state, nick: "" }));
      setInputs((state) => [
        ...state,
        {
          name: "nick",
          type: "text",
          placeholder: "Нік",
          rules: { required: true },
        },
      ]);
    }
  }, [contact, variant]);

  return (
    <Form
      {...props}
      control={control}
      onSubmit={onHandleSubmit}
      className={clsx(styles.form, className)}>
      <div className={styles.inputsWrapper}>
        <TextFields control={control} inputs={inputs} />
        <RadioButtons
          control={control}
          isError={isRadioButtonsError}
          rules={radioButtons[variant].rules}
          name={radioButtons[variant].name || ""}
          labelText={radioButtons[variant].labelText}
          inputs={radioButtons[variant].inputs}
        />
      </div>
      <Button color='accent' type='submit'>
        {buttonText[variant]}
      </Button>
    </Form>
  );
};

export default CustomForm;

import { FormHTMLAttributes } from "react";
import {
  Control,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

type Rule =
  | Omit<
      RegisterOptions<FieldValues, string>,
      "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
    >
  | undefined;

type Input = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  rules?: Rule;
};

type RadioButton = {
  name: string;
  label: string;
  value: string;
  rules?: Rule;
};

export type FormProps = {
  formValues: FieldValues;
  inputFields: Input[];
  radioButtons?: RadioButton[];
  radioButtonsLabel?: string;
  buttonText: string;
  className?: string;
  onHandleSubmit?: (data: FieldValues) => Promise<void>;
} & Partial<FormHTMLAttributes<HTMLFormElement>>;

type InputProps = { control: Control<FieldValues, any> };

export type FieldsProps = Pick<FormProps, "inputFields"> & InputProps;
export type RadioButtonsProps = {
  isError: boolean;
} & Pick<FormProps, "radioButtons" | "radioButtonsLabel"> &
  InputProps;

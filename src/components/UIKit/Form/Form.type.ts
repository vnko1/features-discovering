import { FormHTMLAttributes } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";

type Rule =
  | Omit<
      RegisterOptions<FieldValues, string>,
      "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
    >
  | undefined;

type Field = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  rules?: Rule;
};

type RadioField = {
  name: string;
  label: string;
  value: string;
  rules?: Rule;
};

export type FormProps = {
  values: FieldValues;
  fields: Field[];
  radioGroups?: RadioField[];
  radioGroupsLabel?: string;
  buttonText: string;
  className?: string;
  onHandleSubmit?: (data: FieldValues) => Promise<void>;
} & Partial<FormHTMLAttributes<HTMLFormElement>>;

import { FormHTMLAttributes } from "react";
import { FieldValues, RegisterOptions } from "react-hook-form";

type Field = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
};

export type FormProps = {
  values: FieldValues;
  fields: Field[];
  buttonText: string;
  className?: string;
  onHandleSubmit?: (data: FieldValues) => Promise<void>;
} & Partial<FormHTMLAttributes<HTMLFormElement>>;

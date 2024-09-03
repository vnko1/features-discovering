import {
  Control,
  FieldValues,
  FormProps,
  RegisterOptions,
} from "react-hook-form";

type FormVariant = "contactUs";
type Controller = Control<FieldValues, any>;
type Rule =
  | Omit<
      RegisterOptions<FieldValues, string>,
      "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
    >
  | undefined;
type TextFIeld = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  rules?: Rule;
};
type RadioButton = {
  label: string;
  value: string;
};

export interface TextFieldsProps {
  control: Controller;
  inputs: TextFIeld[];
}

export interface RadioButtonsProps {
  control: Controller;
  name: string;
  isError?: boolean;
  labelText?: string | null;
  inputs?: RadioButton[];
  rules?: Rule;
}

export interface CustomFormProps
  extends Partial<Pick<FormProps<FieldValues>, "action">> {
  variant?: FormVariant;
  className?: string;
  handleSubmit?: (data: FieldValues) => Promise<void>;
}

export interface SubmitDataTypes {
  data: FieldValues;
  event?: React.BaseSyntheticEvent;
  formData: FormData;
  formDataJson: string;
  method?: "post" | "put" | "delete";
}

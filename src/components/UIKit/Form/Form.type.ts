import {
  Control,
  FieldValues,
  FormProps,
  RegisterOptions,
} from "react-hook-form";

type Controller = Control<FieldValues, any>;

export interface FormDataTypes {
  data: FieldValues;
  event?: React.BaseSyntheticEvent;
  formData: FormData;
  formDataJson: string;
  method?: "post" | "put" | "delete";
}

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

export interface TextFieldsProps {
  control: Controller;
  inputs: TextFIeld[];
}

type RadioButton = {
  text: string;
  value: string;
};

export interface RadioButtonsProps {
  control: Controller;
  name: string;
  isError?: boolean;
  labelText?: string | null;
  inputs?: RadioButton[];
  rules?: Rule;
}

type FormVariant = "contactUs";

export interface CustomFormProps
  extends Partial<Pick<FormProps<FieldValues>, "action">> {
  variant?: FormVariant;
  className?: string;
  handleSubmit?: (data: FieldValues) => Promise<void>;
}

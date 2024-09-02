import {
  Control,
  FieldValues,
  FormProps,
  RegisterOptions,
} from "react-hook-form";

//* Type for field validation rules
type Rule =
  | Omit<
      RegisterOptions<FieldValues, string>,
      "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
    >
  | undefined;

//* Types for input fields
type Input = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  rules?: Rule;
};

//* Types for radio buttons
type RadioButton = {
  name: string;
  text: string;
  value: string;
  rules?: Rule;
};

//* Props for the custom form component
export interface CustomFormProps
  extends Partial<FormProps<FieldValues>> {
  formValues: FieldValues;
  inputFields: Input[];
  radioButtons?: RadioButton[];
  radioButtonsLabel?: string;
  buttonText: string;
  className?: string;
  handleSubmit?: (data: FieldValues) => Promise<void>;
}

interface InputProps {
  control: Control<FieldValues, any>;
}

export interface FieldsProps
  extends Pick<CustomFormProps, "inputFields">,
    InputProps {}

export interface RadioButtonsProps
  extends Pick<CustomFormProps, "radioButtons" | "radioButtonsLabel">,
    InputProps {
  isError: boolean;
}

export interface FormDataTypes {
  data: FieldValues;
  event?: React.BaseSyntheticEvent;
  formData: FormData;
  formDataJson: string;
  method?: "post" | "put" | "delete";
}

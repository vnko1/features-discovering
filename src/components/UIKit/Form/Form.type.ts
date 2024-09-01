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

//* Type for input fields
type Input = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  rules?: Rule;
};

//* Type for radio buttons
type RadioButton = {
  name: string;
  label: string;
  value: string;
  rules?: Rule;
};

//* Props for the custom form component
export type CustomFormProps = {
  formValues: FieldValues;
  inputFields: Input[];
  radioButtons?: RadioButton[];
  radioButtonsLabel?: string;
  buttonText: string;
  className?: string;
  handleSubmit?: (data: FieldValues) => Promise<void>;
} & Partial<FormProps<FieldValues>>;

type InputProps = { control: Control<FieldValues, any> };

export type FieldsProps = Pick<CustomFormProps, "inputFields"> &
  InputProps;

export type RadioButtonsProps = {
  isError: boolean;
} & Pick<CustomFormProps, "radioButtons" | "radioButtonsLabel"> &
  InputProps;

export type FormDataTypes = {
  data: FieldValues;
  event?: React.BaseSyntheticEvent;
  formData: FormData;
  formDataJson: string;
  method?: "post" | "put" | "delete";
};

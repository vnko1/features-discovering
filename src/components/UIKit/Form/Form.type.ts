import { Control, FieldValues, FormProps } from "react-hook-form";

// type Rule =
//   | Omit<
//       RegisterOptions<FieldValues, string>,
//       "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
//     >
//   | undefined;

// type Input = {
//   name: string;
//   type: React.HTMLInputTypeAttribute;
//   placeholder: string;
//   rules?: Rule;
// };

// type RadioButton = {
//   text: string;
//   value: string;
//   rules?: Rule;
// };

// export interface FormsData {
//   contactUs: {
//     initialValues: {
//       name: string;
//       email: string;
//       phone: string;
//       contactType: string;
//     };
//     labelTex: string;
//     buttonText: string;
//     fields: { inputs: Input[] };
//     radioButtons: { name: string; inputs: RadioButton[] };
//   };
// }

type FormVariant = "contactUs";

export interface CustomFormProps
  extends Partial<Pick<FormProps<FieldValues>, "action">> {
  variant?: FormVariant;
  className?: string;
  handleSubmit?: (data: FieldValues) => Promise<void>;
}

export interface InputProps {
  control: Control<FieldValues, any>;
  variant: FormVariant;
  isError?: boolean;
}

export interface FormDataTypes {
  data: FieldValues;
  event?: React.BaseSyntheticEvent;
  formData: FormData;
  formDataJson: string;
  method?: "post" | "put" | "delete";
}

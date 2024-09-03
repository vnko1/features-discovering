// "use client";
// import React, { FC } from "react";
// import { FieldValues, Form, useForm } from "react-hook-form";
// import clsx from "clsx";

// import { formsVariant } from "@/constants";
// import { Field, Button, RadioButton } from "..";
// import {
//   CustomFormProps,
//   FormDataTypes,
//   RadioButtonsProps,
//   TextFieldsProps,
// } from "./Form.type";
// import styles from "./Form.module.scss";

// const { initialValues, buttonText, textFields, radioButtons } =
//   formsVariant;

// const TextFields: React.FC<TextFieldsProps> = ({
//   inputs,
//   ...props
// }) => (
//   <div className={styles.fieldsWrapper}>
//     {inputs.map((field, index) => (
//       <Field key={index} {...props} {...field} />
//     ))}
//   </div>
// );

// const RadioButtons: React.FC<RadioButtonsProps> = ({
//   isError,
//   inputs,
//   labelText,
//   ...props
// }) => {
//   if (!inputs) return null;

//   return (
//     <div className={styles.radioGroupsWrapper}>
//       {labelText ? (
//         <p
//           className={clsx(styles.radioGroupsLabel, {
//             [styles.error]: isError,
//           })}>
//           {labelText}
//         </p>
//       ) : null}
//       <div className={styles.radioButtons}>
//         {inputs.map((radio, index) => (
//           <RadioButton key={index} {...props} {...radio} />
//         ))}
//       </div>
//     </div>
//   );
// };
// const CustomForm: FC<CustomFormProps> = ({
//   className,
//   action,
//   variant = "contactUs",
//   handleSubmit,
//   ...props
// }) => {
//   const { control, reset, formState } = useForm<FieldValues>({
//     values: initialValues[variant],
//   });

//   const onHandleSubmit = async (data: FormDataTypes) => {
//     if (typeof action === "function") action(data.formData);
//     else if (handleSubmit) await handleSubmit(data);
//     reset();
//   };

//   const isRadioButtonsError =
//     !!formState.errors[radioButtons[variant]?.name || ""];

//   return (
//     <Form
//       {...props}
//       control={control}
//       onSubmit={onHandleSubmit}
//       className={clsx(styles.form, className)}>
//       <div className={styles.inputsWrapper}>
//         <TextFields control={control} inputs={textFields[variant]} />
//         <RadioButtons
//           control={control}
//           isError={isRadioButtonsError}
//           rules={radioButtons[variant].rules}
//           name={radioButtons[variant].name || ""}
//           labelText={radioButtons[variant].labelText}
//           inputs={radioButtons[variant].inputs}
//         />
//       </div>
//       <Button color='accent' type='submit'>
//         {buttonText[variant]}
//       </Button>
//     </Form>
//   );
// };

// export default CustomForm;

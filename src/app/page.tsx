import { Form } from "@/components";

import styles from "./page.module.scss";

const initialValues = { name: "", email: "", phone: "" };
const fields = [
  {
    name: "name",
    type: "text",
    placeholder: "Імʼя",
    rules: { required: true },
  },
  {
    name: "email",
    type: "text",
    placeholder: "Пошта",
    rules: { required: true },
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Телефон",
    rules: { required: true },
  },
];
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box}></div>
        <Form
          className={styles.form}
          values={initialValues}
          fields={fields}
          buttonText='Надіслати заявку'
        />
      </div>
    </main>
  );
}

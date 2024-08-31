import { Form } from "@/components";

import styles from "./page.module.scss";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  contactType: "",
};
const fields = [
  {
    name: "name",
    type: "text",
    placeholder: "Імʼя",
    // rules: { required: true },
  },
  {
    name: "email",
    type: "text",
    placeholder: "Пошта",
    // rules: { required: true },
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Телефон",
    // rules: { required: true },
  },
];

const radioFields = [
  {
    name: "contactType",
    label: "Telegram",
    value: "telegram",
    rules: { required: true },
  },
  {
    name: "contactType",
    label: "Viber",
    value: "viber",
    rules: { required: true },
  },
  {
    name: "contactType",
    label: "WhatsApp",
    value: "whatsApp",
    rules: { required: true },
  },
  {
    name: "contactType",
    label: "Signal",
    value: "signal",
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
          radioGroups={radioFields}
          radioGroupsLabel='Оберіть, будь ласка, комфортний спосіб зв’язку'
          buttonText='Надіслати заявку'
        />
      </div>
    </main>
  );
}

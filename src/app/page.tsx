import { Form } from "@/components";
import * as z from "zod";

import styles from "./page.module.scss";

const schema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  phone: z.string(),
});

type Schema = z.infer<typeof schema>;

const initialValues: Schema = { name: "", email: "", phone: "" };
const fields = [
  { name: "name", type: "text", placeholder: "Імʼя" },
  { name: "email", type: "email", placeholder: "Пошта" },
  { name: "phone", type: "tel", placeholder: "Телефон" },
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
          schema={JSON.parse(JSON.stringify(schema))}
        />
      </div>
    </main>
  );
}

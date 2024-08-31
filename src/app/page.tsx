import { CourseCard, Form } from "@/components";

import styles from "./page.module.scss";
import { map } from "zod";

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

const defCourse = {
  title: "Основи інвестування для українців",
  isNew: true,
  isMain: true,
  lecturer: {
    name: "Імʼя Прізвище",
    description: "Досягнення або посада",
    photo: "/lecturer.jpg",
  },
};

const courses = [
  defCourse,
  defCourse,
  defCourse,
  defCourse,
  defCourse,
];

export default async function Home() {
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
      <div className={styles.courses}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} id={index} href='/' />
        ))}
      </div>
    </main>
  );
}

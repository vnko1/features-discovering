// "use client";
import { CourseCard, Form } from "@/components";

import styles from "./page.module.scss";
import Menu from "./menu/Menu";
import ArrayForm from "@/components/UIKit/Form/ArrayForm";

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

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.courses}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} id={index} href='/' />
        ))}
      </div>
      <Menu />
    </main>
  );
}

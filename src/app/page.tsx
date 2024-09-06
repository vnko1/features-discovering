import styles from "./page.module.scss";
import BlogCard from "@/components/UIKit/BlogCard/BlogCard";

const defCourse = {
  title: "Основи інвестування для українців",
  isNew: true,
  isMain: true,
  curator: {
    id: 12,
    name: "Імʼя Прізвище",
    description: "Досягнення або посада",
    curatorPhoto: "/lecturer.jpg",
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

const lecturer = {
  id: 12,
  name: "Імʼя Прізвище",
  curatorPhoto: "/lecturer.jpg",
  photo: "/lecturer.jpg",
  courseCurator: { title: "Фінансова грамотність" },
};

const lecturers = [lecturer, lecturer, lecturer];

const review = {
  type: "Студент",
  reviewText:
    "Наша співпраця з цією школою показала високий рівень професіоналізму та ефективності навчальних програм. Ми вдячні за їхній внесок у розвиток освіти в Україні.",
  authorName: "Ольга Петрова",
  authorDescription: 'CEO компанії "Tech Innovators"',
  photo: "/lecturer.jpg",
};

const reviews = [review, review, review];

const blog = {
  mainBanner: "/lecturer.jpg",
  title: "Інвестування у 2024 році",
  publishedAt: new Date(),
  readTimeValue: "10 хв читання",
  tags: "#інвестиції; #фінанси",
};

const blogs = [blog, blog, blog];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        {blogs.map((item, index) => (
          <BlogCard key={index} {...item} href='/' id={index} />
        ))}
      </div>
    </main>
  );
}

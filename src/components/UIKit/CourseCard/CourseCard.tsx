import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./CourseCard.module.scss";

type Lecturer = { name: string; description: string; photo: string };
interface CourseCardProps {
  href: string;
  id: number | string;
  title: string;
  isNew: boolean;
  isMain: boolean;
  lecturer: Lecturer;
  newCardText?: string;
  mainCardText?: string;
}

const CourseCard = ({
  title,
  isNew,
  isMain,
  lecturer,
  href,
  id,
  newCardText = "#Новий курс",
  mainCardText = "#ТОП",
}: CourseCardProps) => {
  return (
    <Link href={href + id} className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.tags}>
        {isNew && <p>{newCardText}</p>}
        {isMain && <p>{mainCardText}</p>}
      </div>
      <div className={styles.lecturer}>
        <Image
          src={lecturer.photo}
          alt={lecturer.description}
          width={94}
          height={94}
          className={styles.lecturerPhoto}
        />
        <div className={styles.lecturerMeta}>
          <p className={styles.lecturerName}>{lecturer.name}</p>
          <p className={styles.lecturerDescription}>
            {lecturer.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

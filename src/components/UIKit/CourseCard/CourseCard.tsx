import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./CourseCard.module.scss";

interface CourseCardProps {
  href: string;
  id: number | string;
  title: string;
  isNew: boolean;
  isMain: boolean;
  lecturer: { name: string; description: string; photo: string };
}

const isNewCardText = "#Новий курс";
const isMainCardText = "#ТОП";

const CourseCard = ({
  title,
  isNew,
  isMain,
  lecturer,
  href,
  id,
}: CourseCardProps) => {
  return (
    <Link href={href + id} className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.tags}>
        {isNew && <p>{isNewCardText}</p>}
        {isMain && <p>{isMainCardText}</p>}
      </div>
      <div className={styles.lecturer}>
        <Image
          src={lecturer.photo}
          alt={lecturer.description}
          width={94}
          height={94}
          className={styles.lecturerPhoto}
        />
        <div className={styles.lecturerTextWrapper}>
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

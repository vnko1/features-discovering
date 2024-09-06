import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CourseInterface } from "@/types/interfaces/course.interface";
import styles from "./CourseCard.module.scss";

interface CourseCardProps extends Omit<CourseInterface, "lecturers"> {
  href: string;
  newCardText?: string;
  mainCardText?: string;
  className?: string;
}

const CourseCard = ({
  title,
  isNew,
  isMain,
  curator,
  href,
  id,
  className,
  newCardText = "#Новий курс",
  mainCardText = "#ТОП",
}: CourseCardProps) => {
  return (
    <Link href={href + id} className={`${styles.card} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.tags}>
        {isNew && <p>{newCardText}</p>}
        {isMain && <p>{mainCardText}</p>}
      </div>
      <div className={styles.lecturer}>
        <Image
          src={curator.curatorPhoto}
          alt={curator.description}
          width={94}
          height={94}
          className={styles.lecturerPhoto}
        />
        <div className={styles.lecturerMeta}>
          <p className={styles.lecturerName}>{curator.name}</p>
          <p className={styles.lecturerDescription}>
            {curator.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

import { CourseInterface } from "./course.interface";

export interface LecturerInterface {
  id: number;
  name: string;
  description: string;
  photo: string;
  coursesCurator: CourseInterface[];
  curatorPhoto: string;
}

import { LecturerInterface } from "./lecturer.interface";

export interface CourseInterface {
  id: number;
  title: string;
  isNew: boolean;
  isMain: boolean;
  curator: Omit<LecturerInterface, "coursesCurator">;
  lecturers: Array<LecturerInterface>;
}

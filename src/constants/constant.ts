import { PrerequisiteType } from "../utils/getTopologicalIterator";

export const COURSE_CONFIG: {
  numCourses: number;
  prerequisites: PrerequisiteType[];
} = {
  numCourses: 9,
  prerequisites: [
    [1, null],
    [2, null],
    [8, 1],
    [3, 1],
    [3, 2],
    [5, 2],
    [9, 8],
    [4, 3],
    [4, 5],
    [7, 9],
    [7, 4],
    [6, 4],
    [6, 5],
  ],
};

import { COURSE_CONFIG } from "../constants/constant";
import { TopologicalResult } from "../hooks/useTopologicalSort";
import { hasBothNumbers } from "../utils/hasBothNumbers";
import Line from "./Line";

interface DirectionLinesProps {
  boundsCollection: {
    [key: string]: {
      left: number;
      top: number;
      width: number;
      height: number;
    };
  };
  visited: TopologicalResult["visited"];
}

const DirectionLines: React.FC<DirectionLinesProps> = ({
  boundsCollection,
  visited,
}) => {
  const courses =
    COURSE_CONFIG.prerequisites.filter(
      (prerequisite) => prerequisite[1] ?? false
    ) || [];

  return (
    <>
      {courses.map((course) => {
        const mainCourse = course[0];
        const prerequisiteCourse = course[1] as number;
        const from = boundsCollection[prerequisiteCourse];
        const to = boundsCollection[mainCourse];
        const isVisited = hasBothNumbers(
          visited,
          mainCourse,
          prerequisiteCourse
        );
        return (
          <Line
            key={`${prerequisiteCourse}-${mainCourse}`}
            from={from}
            to={to}
            isVisited={isVisited}
          />
        );
      })}
    </>
  );
};

export default DirectionLines;

import { useState, useCallback } from "react";
import { getTopologicalIterator } from "../utils/getTopologicalIterator";
import { COURSE_CONFIG } from "../constants/constant";

export type TopologicalResult = {
  result: string;
  stack: string;
  visited: number[];
  isEnd: boolean;
};

let topologicalIterator: ReturnType<typeof getTopologicalIterator>;
topologicalIterator = getTopologicalIterator(
  COURSE_CONFIG.numCourses,
  COURSE_CONFIG.prerequisites
);

const defaultTopologicalResult: TopologicalResult = {
  result: "",
  stack: "",
  visited: [],
  isEnd: false,
};

const useTopologicalSort = () => {
  const [topologicalResult, setTopologicalResult] = useState<TopologicalResult>(
    defaultTopologicalResult
  );

  const handleStepper = useCallback(() => {
    const iterateValue = topologicalIterator.next().value;

    //finished
    if (
      typeof iterateValue === "string" &&
      iterateValue.length === COURSE_CONFIG.numCourses
    ) {
      setTopologicalResult((pre) => {
        const preTopologicalOrder = { ...pre };
        preTopologicalOrder.isEnd = true;
        return preTopologicalOrder;
      });
      return;
    }

    setTopologicalResult((pre) => {
      const preTopologicalOrder = { ...pre };

      //result
      if (typeof iterateValue === "string") {
        preTopologicalOrder.result = iterateValue.split("").join();
        return preTopologicalOrder;
      }
      //stack
      if (Array.isArray(iterateValue)) {
        preTopologicalOrder.stack = iterateValue.join();
        return preTopologicalOrder;
      }
      //visited
      if (typeof iterateValue === "object") {
        preTopologicalOrder.visited = Array.from(iterateValue);
        return preTopologicalOrder;
      }

      return preTopologicalOrder;
    });
  }, []);

  const resetIterator = useCallback(() => {
    setTopologicalResult(defaultTopologicalResult);
    topologicalIterator.return("");
    topologicalIterator = getTopologicalIterator(
      COURSE_CONFIG.numCourses,
      COURSE_CONFIG.prerequisites
    );
  }, []);

  return { topologicalResult, handleStepper, resetIterator };
};

export default useTopologicalSort;

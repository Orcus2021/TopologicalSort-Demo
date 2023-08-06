import { TopologicalResult } from "../hooks/useTopologicalSort";

export const hasBothNumbers = (
  arr: TopologicalResult["visited"],
  num1: number,
  num2: number
) => {
  const count = {
    num1: 0,
    num2: 0,
  };

  for (const num of arr) {
    if (num === num1) {
      count.num1 += 1;
    } else if (num === num2) {
      count.num2 += 1;
    }

    if (count.num1 >= 1 && count.num2 >= 1) {
      return true;
    }
  }

  return false;
};

export type PrerequisiteType = [number, number | null];

export function* getTopologicalIterator(
  numCourses: number,
  prerequisites: PrerequisiteType[]
) {
  const stack: number[] = [];
  const visited = new Set<number>();
  let result = "";

  function* dfs(
    course: number
  ): Generator<Set<number> | number[] | string, any, undefined> {
    for (let j = 0; j < prerequisites.length; j++) {
      const nextCourse = prerequisites[j][0];
      if (prerequisites[j][1] === course && !visited.has(nextCourse)) {
        stack.push(nextCourse);
        visited.add(nextCourse);
        yield visited;
        yield stack;
        yield* dfs(nextCourse);
      }
    }
    if (stack.length > 0) {
      result = stack.pop()!.toString() + result;
    }

    yield stack;
    yield result;
    if (result.length === numCourses) {
      return;
    }
  }

  for (let i = 0; i < numCourses; i++) {
    const course = prerequisites[i][0];
    if (!visited.has(course)) {
      visited.add(course);
      stack.push(course);
      yield visited;
      yield stack;
      yield* dfs(course);
    }
  }

  return result;
}

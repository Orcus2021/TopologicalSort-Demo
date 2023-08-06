import { forwardRef } from "react";
import styled from "styled-components";
import { TopologicalResult } from "../hooks/useTopologicalSort";

const Wrapper = styled.div`
  z-index: 2;
  width: 100px;
  height: 100px;
  margin: 25px;
`;

const Circle = styled.div<{ $isVisited: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid
    ${({ $isVisited, theme }) => ($isVisited ? theme.primary : theme.secondary)};
  background-color: ${({ $isVisited, theme }) =>
    $isVisited ? theme.hover : theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Text = styled.p`
  font-size: 40px;
`;

interface VertexProps {
  value: number;
  visited: TopologicalResult["visited"];
}

const Vertex = forwardRef<HTMLDivElement, VertexProps>(
  ({ value, visited }, ref) => {
    return (
      <Wrapper ref={ref}>
        <Circle $isVisited={visited.includes(value)}>
          <Text>{value}</Text>
        </Circle>
      </Wrapper>
    );
  }
);

export default Vertex;

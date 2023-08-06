import styled from "styled-components";
import useMeasure from "react-use-measure";
import { TopologicalResult } from "../hooks/useTopologicalSort";
import Vertex from "./Vertex";
import DirectionLines from "./DirectionLines";

const Align = styled.div`
  display: flex;
`;

const Wrapper = styled.div``;

type DiagramProps = Pick<TopologicalResult, "visited">;

const Diagram: React.FC<DiagramProps> = ({ visited }) => {
  const [ref1, bounds1] = useMeasure();
  const [ref2, bounds2] = useMeasure();
  const [ref3, bounds3] = useMeasure();
  const [ref4, bounds4] = useMeasure();
  const [ref5, bounds5] = useMeasure();
  const [ref6, bounds6] = useMeasure();
  const [ref7, bounds7] = useMeasure();
  const [ref8, bounds8] = useMeasure();
  const [ref9, bounds9] = useMeasure();

  const boundsCollection = {
    1: bounds1,
    2: bounds2,
    3: bounds3,
    4: bounds4,
    5: bounds5,
    6: bounds6,
    7: bounds7,
    8: bounds8,
    9: bounds9,
  };

  return (
    <Wrapper>
      <Align>
        <Vertex
          ref={ref1}
          value={1}
          visited={visited}
        />
        <Vertex
          ref={ref2}
          value={2}
          visited={visited}
        />
      </Align>
      <Align>
        <Vertex
          ref={ref8}
          value={8}
          visited={visited}
        />
        <Vertex
          ref={ref3}
          value={3}
          visited={visited}
        />
        <Vertex
          ref={ref5}
          value={5}
          visited={visited}
        />
      </Align>
      <Align>
        <Vertex
          ref={ref9}
          value={9}
          visited={visited}
        />
        <Vertex
          ref={ref4}
          value={4}
          visited={visited}
        />
      </Align>
      <Align>
        <Vertex
          ref={ref7}
          value={7}
          visited={visited}
        />
        <Vertex
          ref={ref6}
          value={6}
          visited={visited}
        />
      </Align>
      <DirectionLines
        boundsCollection={boundsCollection}
        visited={visited}
      />
    </Wrapper>
  );
};

export default Diagram;

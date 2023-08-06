import styled from "styled-components";
import { TopologicalResult } from "../hooks/useTopologicalSort";

const Text = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
`;

const TextWithSpacing = styled.span`
  letter-spacing: 5px;
`;

const Wrapper = styled.div`
  min-width: 360px;
`;

type RecordProps = Pick<TopologicalResult, "stack" | "result">;

const Record: React.FC<RecordProps> = ({ stack, result }) => {
  return (
    <Wrapper>
      <Text>
        Stack : <TextWithSpacing>{stack}</TextWithSpacing>
      </Text>
      <Text>
        Result : <TextWithSpacing>{result}</TextWithSpacing>
      </Text>
    </Wrapper>
  );
};

export default Record;

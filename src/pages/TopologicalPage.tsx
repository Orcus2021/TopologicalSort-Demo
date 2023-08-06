import React from "react";
import styled from "styled-components";
import Diagram from "../components/Diagram";
import Record from "../components/Record";
import useTopologicalSort from "../hooks/useTopologicalSort";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 4px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Align = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 5px 0 0;
  font-size: 56px;
  color: white;
`;

const TopologicalPage: React.FC = () => {
  const { topologicalResult, handleStepper, resetIterator } =
    useTopologicalSort();

  const { visited, stack, result, isEnd } = topologicalResult || {};

  return (
    <Wrapper>
      <Title>Topological Sort</Title>
      <Diagram visited={visited} />
      <Record
        stack={stack}
        result={result}
      />
      <Align>
        <Button onClick={resetIterator}>Reset</Button>
        <Button onClick={handleStepper}>{isEnd ? "End" : "Next"}</Button>
      </Align>
    </Wrapper>
  );
};

export default TopologicalPage;

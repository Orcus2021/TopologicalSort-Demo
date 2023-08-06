import React from "react";
import styled from "styled-components";

const StyledLine = styled.div<{
  $startY: number;
  $startX: number;
  $length: number;
  $angle: number;
  $isVisited: boolean;
}>`
  z-index: 1;
  position: absolute;
  width: ${({ $length }) => `${$length - 60}px`};
  height: 8px;
  background-color: ${({ $isVisited, theme }) =>
    $isVisited ? theme.primary : theme.secondary};
  transform-origin: 0 50%;
  transform: rotate(${({ $angle }) => $angle}deg);
  top: ${({ $startY }) => `${$startY}px`};
  left: ${({ $startX }) => `${$startX}px`};
`;

const Arrow = styled.div<{
  $length: number;
  $isVisited: boolean;
}>`
  position: relative;
  left: ${({ $length }) => `${$length - 70}px`};
  width: 20px;
  height: 20px;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 20px solid
    ${({ $isVisited, theme }) => ($isVisited ? theme.primary : theme.secondary)};
  transform: translateY(-30%);
`;

interface EdgeProps {
  from: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  to: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  isVisited: boolean;
}

const Line: React.FC<EdgeProps> = ({ from, to, isVisited }) => {
  const startX = from.left + from.width / 2;
  const startY = from.top + from.height / 2;
  const endX = to.left + to.width / 2;
  const endY = to.top + to.height / 2;
  const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
  const angle = Math.round(
    Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)
  );

  return (
    <StyledLine
      $startX={startX}
      $startY={startY}
      $length={length}
      $angle={angle}
      $isVisited={isVisited}
    >
      <Arrow
        $length={length}
        $isVisited={isVisited}
      />
    </StyledLine>
  );
};

export default Line;

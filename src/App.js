import styled from "styled-components";

export default function App() {
  const a = 1;
  return (
    <div>
      <StyledH1>My React App!</StyledH1>
    </div>
  );
}

const StyledH1 = styled.h1`
  color: red;
`;

import styled from 'styled-components';

export default function Heading() {
  return <StyledHeading className="Heading">Scorekeeper</StyledHeading>;
}

const StyledHeading = styled.h1`
  text-align: center;
  margin: 20px;
  font-size: 2rem;
  font-family: 'Faster One', cursive;
`;

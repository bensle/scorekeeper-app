import styled from 'styled-components';
export default function Button({ onClick, children }) {
  return <ResetButton onClick={onClick}>{children}</ResetButton>;
}

const ResetButton = styled.button`
  width: 9rem;
  margin: 0.5rem auto;
  padding: 1rem 1.5rem;
  font-weight: bold;
  border: solid 2px white;
  border-radius: 10px;
  background-color: lightgray;
`;

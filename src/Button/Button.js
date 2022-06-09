import styled from 'styled-components';
export default function Button({ onClick, children }) {
  console.log(children);
  return <ResetButton onClick={onClick}>{children}</ResetButton>;
}

const ResetButton = styled.button`
  width: 9rem;
  padding: 1rem 1.5rem;
  font-weight: bold;
  border: solid 2px white;
  border-radius: 10px;
  background-color: silver;
  width: 100%;
  font-family: inherit;
  &:hover {
    background-color: ${(props) =>
      props.children === 'Reset Scores' ? 'crimson' : 'lightgreen'};
    transition: 1s;
  }
`;

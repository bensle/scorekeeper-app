import styled from 'styled-components';
export default function PlayerForm({ onCreatePlayer }) {
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;

    console.log('FormJS', name.value);

    onCreatePlayer(name.value);
    form.reset();
    name.focus();
  }

  return (
    <StyledPlayerForm aria-labelledby="Player" onSubmit={onSubmit}>
      <StyledInputHeading id="Player"> Add new Player</StyledInputHeading>
      <label className="Playerform__label" htmlFor="name"></label>
      <input className="Playerform__input" type="text" id="name" />
      <StyledSubmitButton>Submit</StyledSubmitButton>
    </StyledPlayerForm>
  );
}

const StyledPlayerForm = styled.form`
  display: grid;
  gap: 8px;
`;

const StyledInputHeading = styled.h2`
  text-align: center;
  font-size: 1rem;
`;

const StyledSubmitButton = styled.button`
  font-family: inherit;
  width: 9rem;
  padding: 0.3rem;
  font-weight: bold;
  border: solid 2px white;
  border-radius: 10px;
  background-color: silver;
  width: 100%;
  &:hover {
    background-color: gold;
    transition: 1s;
  }
`;

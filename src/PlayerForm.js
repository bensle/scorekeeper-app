import { useState } from 'react';
import './PlayerForm.css';

const players = [
  {
    name: 'John Doe',
    score: 0,
  },
];

export default function PlayerForm() {
  const [player, setPlayer] = useState([players]);

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    handleSubmit(name.value);
  }

  function handleSubmit(name) {
    setPlayer([
      ...player,
      {
        name: name,
        score: 0,
      },
    ]);
  }

  console.log(player);

  return (
    <form className="PlayerForm" aria-labelledby="Player" onSubmit={onSubmit}>
      <h2 id="Player"> Add new Player</h2>
      <label className="Playerform__label" htmlFor="name"></label>
      <input
        className="Playerform__input"
        type="text"
        id="name"
        required
        placeholder="Player name"
      ></input>
    </form>
  );
}

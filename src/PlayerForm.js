import './PlayerForm.css';

export default function PlayerForm({ onCreatePlayer }) {
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    onCreatePlayer(name.value);

    console.log('FormJS', name.value);
  }

  return (
    <form className="PlayerForm" aria-labelledby="Player" onSubmit={onSubmit}>
      <h2 id="Player"> Add new Player</h2>
      <label className="Playerform__label" htmlFor="name"></label>
      <input
        className="Playerform__input"
        type="text"
        id="name"
        placeholder="Player name"
      />
      <button>Submit</button>
    </form>
  );
}

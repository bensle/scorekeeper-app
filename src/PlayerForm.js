import './PlayerForm.css';
export default function PlayerForm() {
  return (
    <form className="PlayerForm">
      <label className="Playerform__label" htmlFor="addplayer">
        Add Player
      </label>
      <input
        className="Playerform__input"
        type="text"
        id="addplayer"
        required
        placeholder="Player name"
      ></input>
    </form>
  );
}

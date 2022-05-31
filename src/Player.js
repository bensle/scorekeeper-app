import './Player.css';
export default function Player({ text, score }) {
  return (
    <li className="Player">
      <span className="player__name">{text}</span> <button>-</button> {score}
      <button>+</button>
    </li>
  );
}
// <section className="Playersection">
//   <h2 className="playername">{text}</h2>
//   <button className="addbutton">+</button>
//   <h2 className="playerscore">{score}</h2>
//   <button className="subtractbutton">-</button>
// </section>

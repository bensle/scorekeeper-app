import './Player.css';
export default function Player({ singlePlayer }) {
  return (
    <li className="Player">
      <span className="Player__name">{singlePlayer.name}</span>
      <button className="Player__button">-</button>
      <span className="Player__score">{singlePlayer.score}</span>
      <button className="Player__button">+</button>
    </li>
  );
}
// <section className="Playersection">
//   <h2 className="playername">{text}</h2>
//   <button className="addbutton">+</button>
//   <h2 className="playerscore">{score}</h2>
//   <button className="subtractbutton">-</button>
// </section>

// {/* <span className="player__name">{text}</span> */}

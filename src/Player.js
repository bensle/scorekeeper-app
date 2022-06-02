import './Player.css';
export default function Player({ id, player, score }) {
  console.log('PlayerJS--', player);
  return (
    <li className="Player">
      <span className="Player__name">{player}</span>
      <button className="Player__button">-</button>
      <span className="Player__score">{score}</span>
      <button className="Player__button">+</button>
    </li>
  );
}

import './Player.css';
export default function Player({
  id,
  player,
  score,
  onIncreaseScore,
  onDecreaseScore,
}) {
  console.log('PlayerJS--', player);
  return (
    <li className="Player">
      <span className="Player__name">{player}</span>
      <button onClick={onDecreaseScore} className="Player__button">
        -
      </button>
      <span className="Player__score">{score}</span>
      <button onClick={onIncreaseScore} className="Player__button">
        +
      </button>
    </li>
  );
}

import Heading from '../Heading/Heading';
import Player from '../Player/Player';
import Button from '../Button/Button';

export default function GamePage({
  onDecreaseScore,
  onIncreaseScore,
  onResetScores,
  onResetAllPlayers,
  players,
}) {
  return (
    <>
      <header>
        <Heading />
        <h2>Name of the Game</h2>
      </header>
      {players.map((player, index) => (
        <Player
          id={player.id}
          key={player.id}
          player={player.name}
          score={player.score}
          onIncreaseScore={() => onIncreaseScore(index)}
          onDecreaseScore={() => onDecreaseScore(index)}
        />
      ))}
      <Button onClick={onResetScores}>Reset Scores</Button>
      <Button onClick={onResetAllPlayers}>New Game</Button>
    </>
  );
}

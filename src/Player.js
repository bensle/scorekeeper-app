import styled from 'styled-components';

export default function Player({
  id,
  player,
  score,
  onIncreaseScore,
  onDecreaseScore,
}) {
  console.log('PlayerJS--', player);
  return (
    <PlayerList>
      <PlayerName>{player}</PlayerName>
      <button onClick={onDecreaseScore} className="Player__button">
        -
      </button>
      <PlayerScore className="Player__score">{score}</PlayerScore>
      <button onClick={onIncreaseScore} className="Player__button">
        +
      </button>
    </PlayerList>
  );
}

const PlayerList = styled.li`
  display: grid;
  grid-auto-flow: column;
  border-bottom: solid 2px;
`;

const PlayerName = styled.span`
  width: 50vw;
`;
const PlayerScore = styled.span`
  text-align: center;
`;

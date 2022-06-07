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
      <StyledListButton onClick={onDecreaseScore}>-</StyledListButton>
      <PlayerScore>{score}</PlayerScore>
      <StyledListButton onClick={onIncreaseScore}>+</StyledListButton>
    </PlayerList>
  );
}

const PlayerList = styled.li`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const PlayerName = styled.span`
  margin-right: auto;
`;
const PlayerScore = styled.span`
  text-align: center;
`;
const StyledListButton = styled.button`
  width: 20px;
  height: 20px;
  &:hover {
    background-color: crimson;
  }
`;

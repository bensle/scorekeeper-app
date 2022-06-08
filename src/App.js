import Button from './Button/Button';
import Player from './Player/Player';
import Heading from './Heading/Heading';
import PlayerForm from './Playerform/PlayerForm';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getFromLocal, setToLocal } from './lib/localStorage';
import styled from 'styled-components';

function App() {
  //-----------------?? nullish coalescing operator------------------------
  // = returned das, was auf der rechten Seite steht,
  //  wenn das, was auf der linken Seite steh "null" oder "undefinded" ist!
  const [players, setPlayers] = useState(getFromLocal('players') ?? []);
  useEffect(() => setToLocal('players', players), [players]);

  function createPlayer(player) {
    setPlayers([
      ...players,
      {
        id: nanoid(),
        name: player,
        score: 0,
      },
    ]);
  }
  console.log('AppJS--', players);

  function increaseScore(index) {
    setPlayers(
      players.map((player, playerIndex) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + 1 };
        }
        return player;
      })
    );
  }

  function decreaseScore(index) {
    setPlayers(
      players.map((player, playerIndex) => {
        if (index === playerIndex) {
          return { ...player, score: player.score - 1 };
        }
        return player;
      })
    );
  }
  function resetScores() {
    setPlayers(
      players.map((player) => {
        return { ...player, score: (player.score = 0) };
      })
    );
  }

  function resetAllPlayers() {
    setPlayers([]);
  }

  // ------ Slice Variante ----- (also delete)
  // function increaseScore(index) {
  //   const currentPlayer = players[index];
  //   setPlayers([
  //     ...players.slice(0, index),
  //     { ...currentPlayer, score: currentPlayer.score + 1 },
  //     ...players.slice(index + 1),
  //   ]);
  // }

  // function decreaseScore(index) {
  //   const currentPlayer = players[index];
  //   setPlayers([
  //     ...players.slice(0, index),
  //     { ...currentPlayer, score: currentPlayer.score - 1 },
  //     ...players.slice(index + 1),
  //   ]);
  // }
  //___________________________________________________________________________
  return (
    <AppContainer>
      <Heading />
      {/* eslint-disable-next-line */}
      <PlayerList role="list">
        {players.map((player, index) => (
          <Player
            id={player.id}
            key={player.id}
            player={player.name}
            score={player.score}
            onIncreaseScore={() => increaseScore(index)}
            onDecreaseScore={() => decreaseScore(index)}
          />
        ))}
      </PlayerList>
      <Button onClick={resetScores}>Reset Scores</Button>
      <Button onClick={resetAllPlayers}>New Game</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: grid;
  margin: 0 auto;
  gap: 20px;

  width: 300px;
`;

const PlayerList = styled.ul`
  display: grid;
  list-style: none;
  gap: 10px;
  /* margin: 0 20px 20px 20px; */
`;

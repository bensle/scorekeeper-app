// import Button from './Button/Button';
// import Player from './Player/Player';
import Heading from './Heading/Heading';
import PlayerForm from './Playerform/PlayerForm';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getFromLocal, setToLocal } from './lib/localStorage';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';
import GamePage from './Pages/GamePage';

function App() {
  //-----------------?? nullish coalescing operator------------------------
  // = returned das, was auf der rechten Seite steht,
  //  wenn das, was auf der linken Seite steh "null" oder "undefinded" ist!
  const [players, setPlayers] = useState(getFromLocal('players') ?? []);
  useEffect(() => setToLocal('players', players), [players]);

  return (
    <AppContainer>
      <Heading />
      {/* eslint-disable-next-line */}
      {/* <PlayerList role="list"> </PlayerList> */}
      <GamePage
        onResetScores={resetScores}
        onIncreaseScore={increaseScore}
        onDecreaseScore={decreaseScore}
        onResetAllPlayers={resetAllPlayers}
        players={players}
      />

      <PlayerForm onCreatePlayer={createPlayer} />
      <Navigation />
    </AppContainer>
  );

  //------------------------Funktionen-----------------------
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
}

export default App;

const AppContainer = styled.div`
  display: grid;
  margin: 0 auto;
  gap: 20px;

  width: 300px;
`;

// const PlayerList = styled.ul`
//   display: grid;
//   list-style: none;
//   gap: 10px;
// `;

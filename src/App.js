import './App.css';
import Button from './Button';
import Player from './Player';
import Heading from './Heading';
import PlayerForm from './PlayerForm';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [players, setPlayers] = useState([]);

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
    <div className="App">
      <Heading />
      {/* eslint-disable-next-line */}
      <ul className="Player__list" role="list">
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
      </ul>
      <Button onClick={resetScores}>Reset Scores</Button>
      <Button onClick={resetAllPlayers}>New Game</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;

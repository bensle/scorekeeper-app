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
    console.log('AppJS--', player);
  }

  return (
    <div className="App">
      <Heading />
      {/* eslint-disable */}
      <ul className="Player__list" role="list">
        {players.map((player) => (
          <Player
            id={player.id}
            key={player.id}
            player={player.name}
            score={player.score}
          />
        ))}
      </ul>
      <Button text="Reset scores" />
      <Button text="New game" />
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;

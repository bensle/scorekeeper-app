import './App.css';
import { Playerdata } from './Playerdata';
import Button from './Button';
import Heading from './Heading';
import Player from './Player';
import PlayerForm from './PlayerForm';

function App() {
  return (
    <div className="App">
      <Heading />
      {/* eslint-disable */}
      <ul className="Player__list" role="list">
        {Playerdata.map((singlePlayer) => (
          <Player key={singlePlayer.id} singlePlayer={singlePlayer} />
        ))}
        {/* <Player text="John Doe" score={30} />
        <Player text="Jane Doe" score={30} /> */}
      </ul>
      <Button text="Reset scores" />
      <Button text="New game" />
      <PlayerForm />
    </div>
  );
}

export default App;

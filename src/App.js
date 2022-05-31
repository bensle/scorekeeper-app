import './App.css';
import Button from './Button';
import Heading from './Heading';
import Player from './Player';
import PlayerForm from './PlayerForm';

function App() {
  return (
    <div className="App">
      <Heading />
      <ul>
        <Player text="John Doe" score={30} />
        <Player text="Jane Doe" score={30} />
      </ul>
      <Button text="Reset scores" />
      <Button text="New game" />
      <PlayerForm />
    </div>
  );
}

export default App;

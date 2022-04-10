import './App.css';
import Deck from "./helpers/Deck";

function App() {
  const deck = new Deck();
  deck.shuffle();
  console.log(deck.cards)

  return (
    <div className="App">

    </div>
  );
}

export default App;

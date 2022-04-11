import './styles/App.style.css';
import Deck from "./helpers/Deck";
import PlayArea from "./components/PlayArea";

function App() {
	const deck = new Deck();
	deck.shuffle();
	console.log(deck.cards)

	return (
		<div className="App">
			<div className="container">
				<PlayArea isPlayer={false} />
				<h1>Result</h1>
				<PlayArea isPlayer={true} />
			</div>
		</div>
	);
}

export default App;

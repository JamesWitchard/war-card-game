import {useEffect, useState} from "react";
import PlayArea from "./components/PlayArea";
import Deck from "./helpers/Deck";
import './styles/App.style.css';

function App() {
	const [playerDeck, setPlayerDeck] = useState(null);
	const [computerDeck, setComputerDeck] = useState(null);
	const [playerCard, setPlayerCard] = useState(null);
	const [computerCard, setComputerCard] = useState(null);
	const [inRound, setInRound] = useState(false);

	const clearBeforeRound = () => {
		setInRound(false);
	}

	const startGame = () => {

		const deck = new Deck();
		deck.shuffle();
		const midpoint = Math.ceil(deck.numberOfCards / 2);
		setPlayerDeck(new Deck(deck.cards.slice(0, midpoint)));
		setComputerDeck(new Deck(deck.cards.slice(midpoint, deck.numberOfCards)));
		setInRound(false);

		clearBeforeRound();

	};

	const flipCards = () => {
		setInRound(true);
		let tempPlayerDeck = [...playerDeck.cards];
		let tempComputerDeck = [...computerDeck.cards];
		setPlayerCard(tempPlayerDeck.shift());
		setComputerCard(tempComputerDeck.shift());
		setPlayerDeck(new Deck(tempPlayerDeck));
		setComputerDeck(new Deck(tempComputerDeck));
	};

	const handleClick = () => {
		if (inRound) {
			clearBeforeRound();
		} else {
			flipCards();
		}
	}

	useEffect(() => {
		startGame();
	},[])


	return (
		<div className="App">
			<div className="container" onClick={handleClick}>
				{computerDeck && <PlayArea
					isPlayer={false}
					deck={computerDeck}
					hidden={!inRound}
					drawnCard={computerCard}
				/>}
				<h1>Result</h1>
				{playerDeck && <PlayArea
					isPlayer={true}
					deck={playerDeck}
					hidden={!inRound}
					drawnCard={playerCard}
				/>}
			</div>
		</div>
	);
}

export default App;

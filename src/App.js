import {useEffect, useState} from "react";
import PlayArea from "./components/PlayArea";
import Deck, {CARD_VALUE_MAP} from "./helpers/Deck";
import './styles/App.style.css';

function App() {
	const [playerDeck, setPlayerDeck] = useState(null);
	const [computerDeck, setComputerDeck] = useState(null);
	const [playerCard, setPlayerCard] = useState(null);
	const [computerCard, setComputerCard] = useState(null);
	const [inRound, setInRound] = useState(false);
	const [result, setResult] = useState("");
	const [gameOver, setGameOver] = useState(true);

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
		setResult("Result");
		setGameOver(false);

		clearBeforeRound();

	};

	function isGameOver(deck) {
		return deck.numberOfCards <= 0;
	}

	const determineWinner = () => {
		// display the winner
		if (playerCard == null && computerCard == null) return;

		if (isWinner(playerCard, computerCard)) {
			setResult("Player Wins!");
			setPlayerDeck(() => new Deck([...playerDeck.cards, playerCard, computerCard]));
			if (isGameOver(computerDeck)) {
				setResult("Player has won the War!");
				setGameOver(true);
			}
		} else if (isWinner(computerCard, playerCard)) {
			setResult("Computer Wins!");
			setComputerDeck(() => new Deck([...computerDeck.cards, playerCard, computerCard]));
			if (isGameOver(playerDeck)) {
				setResult("Computer has won the War!")
				setGameOver(true);
				}
			} else {
			setResult("Draw!");
			setPlayerDeck(() => new Deck([...playerDeck.cards, playerCard]));
			setComputerDeck(() => new Deck([...computerDeck.cards, computerCard]));
		}


	}

	const flipCards = () => {
		setInRound(true);
		let tempPlayerDeck = [...playerDeck.cards];
		let tempComputerDeck = [...computerDeck.cards];
		setPlayerCard(tempPlayerDeck.shift());
		setComputerCard(tempComputerDeck.shift());
		setPlayerDeck(new Deck(tempPlayerDeck));
		setComputerDeck(new Deck(tempComputerDeck));
		console.log(playerCard, computerCard);
	};

	const handleClick = () => {
		if (gameOver) {
			startGame()
			return;
		}

		if (inRound) {
			clearBeforeRound();
		} else {
			flipCards();
		}
	}

	const isWinner = (cardOne, cardTwo) => {
		return CARD_VALUE_MAP[cardOne?.value] > CARD_VALUE_MAP[cardTwo?.value]
	}

	useEffect(() => {
		startGame();
	},[])

	useEffect(() => {
		if (!inRound) return;
		determineWinner();
	}, [inRound])

	return (
		<div className="App">
			<div className="container" onClick={handleClick}>
				{computerDeck && <PlayArea
					isPlayer={false}
					deck={computerDeck}
					hidden={!inRound}
					drawnCard={computerCard}
				/>}
				<h1 className={`${!inRound ? "hidden" : ""}`}>{result}</h1>
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

import {createContext, useEffect, useMemo, useRef, useState} from "react";
import Deck, {Card} from "./helpers/Deck";
import MainMenuState from "./components/game-state/MainMenuState";
import SetPlayersState from "./components/game-state/SetPlayersState";
import ShuffleState from "./components/game-state/ShuffleState";
import SetDecksState from "./components/game-state/SetDecksState";
import {GAME_STATE} from "./helpers/GameState";
import DrawCardState from "./components/game-state/DrawCardState";
import PlayerChooseCardState from "./components/game-state/PlayerChooseCardState";
import PlayerArea from "./components/PlayerArea";

//import './styles/App.style.css';

export const GameStateContext = createContext(null);

function App() {
	const [gameState, setGameState] = useState(GAME_STATE.mainMenu)
	const [currentState, setCurrentState] = useState("");
	const [numPlayers, setNumPlayers] = useState();
	const [currentPlayer, setCurrentPlayer] = useState(0);
	const [playerDecks, setPlayerDecks] = useState([]);
	const [playerHands, setPlayerHands] = useState([]);
	const [playedCard, setPlayedCard] = useState([]);
	const [revealed, setRevealed] = useState(true);
	const optionRef = useRef();

	const HAND_SIZE = 5;
	const nextState = () => {
		setGameState(GAME_STATE[gameState.nextState]);
	}
	const prevState = () => {
		setGameState(GAME_STATE[gameState.prevState]);
	}
	const gotoState = (state) => {
		setGameState(state);
	}

	const setNumberOfPlayers = (playerAmount) => {
		console.log(playerAmount);
		setNumPlayers(playerAmount);
		nextState();
	}

	const dealDecks = () => {
		const deck = new Deck();
		deck.shuffle();
		let dealerArray = [];
		for (let i = 0; i < deck.cards.length; i++) {
			let index = (i % numPlayers);
			dealerArray[index] = dealerArray[index] || [];
			dealerArray[index].push(deck.cards[i]);
		}
		for (let i = 0; i < numPlayers; i++) {
			const newDeck = new Deck(dealerArray[i]);
			setPlayerDecks(prev => [...prev, newDeck]);
		}
	}

	const drawCards = () => {
		setPlayerHands([]);
		let tempPlayerDecks = [...playerDecks];
		let handArray = [];
		for (let i = 0; i < numPlayers; i++) {
			if (playerDecks[i].cards <= 0) return;
			tempPlayerDecks[i] = new Deck([...playerDecks[i].cards]);
			let amount = (tempPlayerDecks[i].cards.length > HAND_SIZE) ? HAND_SIZE : tempPlayerDecks[i].cards.length
			for (let j = 0; j < amount; j++) {
				let newCard = tempPlayerDecks[i].cards.shift();
				handArray[i] = handArray[i] || [];
				handArray[i].push(newCard);
			}
			const hand = [...handArray[i]]
			setPlayerHands(prev => [...prev, hand]);
			setPlayerDecks(tempPlayerDecks);
		}
	}

	const startGame = () => {
		setPlayerDecks(() => []);
		setPlayerHands(() => []);
		setPlayedCard(() => []);
	}

	const playCard = (cardIndex, playerIndex) => {
		setRevealed(false)
		const tempPlayerHands = [...playerHands];
		const tempPlayedCard = [...playedCard];
		tempPlayedCard[playerIndex] = tempPlayerHands[playerIndex].splice(cardIndex, 1)[0];
		setPlayerHands([...tempPlayerHands]);
		setPlayedCard([...tempPlayedCard]);
	};

	const computerPlayedCard = (playerIndex) => {
		if (playerIndex === 0) return;
		if (playerHands[playerIndex].length <= 0) return;
		const tempPlayerHands = [...playerHands];
		const card = tempPlayerHands[playerIndex].reduce((current, previous) => {
			return (current.getCardValue > previous.getCardValue ) ? current : previous});
		const cardIndex = tempPlayerHands[playerIndex].indexOf(card);
		playCard(cardIndex, playerIndex);
	};

	const initializePlayedCards = () => {
		const tempPlayedCards = []
		for (let i = 0; i < numPlayers; i++) {
			tempPlayedCards[i] = new Card(null, null);
		}
		setPlayedCard([...tempPlayedCards]);
	};

	const revealCards = () => {
		setRevealed(true);
		setTimeout(initializePlayedCards, 2000);
	};

	const gameStateValues = {
		nextState,
		prevState,
		gotoState,
		setNumberOfPlayers,
		startGame,
		dealDecks,
		drawCards,
		gameState,
		numPlayers,
		playerDecks,
		playerHands
	};

	useEffect(() => {
		setCurrentState(`The current state is: ${gameState.state}`);
	}, [gameState])

	useEffect(initializePlayedCards, [numPlayers])

	useEffect(() => {
		startGame();
	}, [])
	return (
		<div className="App">
			<div className="container">
				<editor-fold desc="Debug Tools">
				<h1>{currentState}</h1>
				<button onClick={prevState}>Previous State</button>
				<button onClick={nextState}>Next State</button>
				<br/>
				<form action="#">
					<select ref={optionRef}>
						{Object.keys(GAME_STATE).map((item, index) => {
							return <option key={index} value={item}>{item}</option>
						})}
					</select>
					<button onClick={(e) => {
						e.preventDefault();
						gotoState(GAME_STATE[optionRef.current.value])
					}}>Go To State
					</button>
				</form>
				</editor-fold>
				<GameStateContext.Provider value={gameStateValues} >
					{gameState.state === "mainMenu" && <MainMenuState />}
					{gameState.state === "setPlayers" && <SetPlayersState />}
					{gameState.state === "shuffle" && <ShuffleState />}
					{gameState.state === "setDecks" && <SetDecksState />}
					{gameState.state === "drawCards" && <DrawCardState />}
					{gameState.state === "playerChooseCard" && <PlayerChooseCardState />}
					{playerDecks?.map((deck, index) => {
						return <PlayerArea key={`player-${index+1}-area`} playerIndex={index} />})}
				</GameStateContext.Provider>

				<div>{playerHands[0]?.map((card, index) => {
					return <button
						key={`player-card-${index}`}
						className={"card player-card"}
						onClick={() => playCard(index, 0)}
					>
						{card.printCard()}
					</button>
				})}</div>
				<div> {playerHands?.map((player, index) => {
					if (index === 0) return;
					return <button key={`player-${index}-button`}
					               onClick={() => computerPlayedCard(index)}
					               disabled={player.length <= 0}
					>
						{`Player ${index + 1} play card`}
					</button>
				})}
				</div>
				{gameState.state === "drawCards" && <h2>{playedCard?.map((card, index) => <div
					key={`played-card-${index}`}>{card.getSuit !== null && `Player ${index + 1} played: ${revealed ? card.printCard() : "Hidden"}`}</div>)}</h2>}
				{gameState.state === "drawCards" &&
					<button
						disabled={playedCard.some((card) => card.suit === null)}
						onClick={revealCards}
					>
						Reveal Cards!</button>}
			</div>
		</div>
	);
}

export default App;

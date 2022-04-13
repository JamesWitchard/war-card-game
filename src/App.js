import {useEffect, useRef, useState} from "react";
import PlayArea from "./components/PlayArea";
import Deck, {CARD_VALUE_MAP} from "./helpers/Deck";
import MainMenuState from "./components/game-state/MainMenuState";
import SetPlayersState from "./components/game-state/SetPlayersState";
import ShuffleState from "./components/game-state/ShuffleState";
import SetDecksState from "./components/game-state/SetDecksState";
import {GAME_STATE} from "./helpers/GameState";
import DrawCardState from "./components/game-state/DrawCardState";
import Utils from "./helpers/Utils";
//import './styles/App.style.css';


function App() {
	const [gameState, setGameState] = useState(GAME_STATE.mainMenu)
	const [currentState, setCurrentState] = useState("");
	const [numPlayers, setNumPlayers] = useState();
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [playerDecks, setPlayerDecks] = useState([])
	const [playerHands, setPlayerHands] = useState([]);
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
		console.log(handArray);
	}

	const startGame = () => {
		setPlayerDecks([]);
		setPlayerHands([]);
	}

	useEffect(() => {
		// switch (gameState.state) {
		// 	case "mainMenu": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "setPlayers": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "shuffle": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "setDecks": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "drawCards": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "playerChooseCard": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "revealCard": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "determineSkirmishWinner": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "skirmishResultScreen": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "determineBattleWinner": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "battleResultScreen": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "determineWarWinner": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	case "resultScreen": {
		// 		setCurrentState(`The current state is: ${gameState.state}`);
		// 		break;
		// 	}
		// 	default: {
		// 		break;
		// 	}
		// }
		setCurrentState(`The current state is: ${gameState.state}`);
	}, [gameState])


	return (
		<div className="App">
			<div className="container">
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
					}}>Go To State</button>
				</form>
				{gameState.state === "mainMenu" && <MainMenuState clickEvent={nextState}/>}
				{gameState.state === "setPlayers" && <SetPlayersState clickEvent={setNumberOfPlayers}/>}
				{gameState.state === "shuffle" && <ShuffleState nextState={nextState} startGame={startGame}/>}
				{gameState.state === "setDecks" &&
					<SetDecksState playerNum={numPlayers} nextState={nextState} dealDecks={dealDecks}/>}
				{gameState.state === "drawCards" &&
					<DrawCardState
						playerNum={numPlayers}
						playerDecks={playerDecks}
						drawCards={drawCards}
						playerHands={playerHands}
					/>}
			</div>
		</div>
	);
}

export default App;

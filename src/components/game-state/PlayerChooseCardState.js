/*
	Game state for all players choosing their card to play
	TODO: Sort out a way to automate the turns for the computer
	TODO: Go to next state after all players have played a card.
	TODO: Randomize the amount of time it takes a computer to play a card
	TODO: Animate card from hand to played card area
 */

import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const PlayerChooseCardState = () => {

	const {currentPlayer, numPlayers, computerPlayedCard, nextState, setCurrentPlayer} = useContext(GameStateContext)

	useEffect(() => {
		// player playing a card logic is already handled in the CardComponent class.
		if (currentPlayer === 0) return;

		// if the current player is higher than the number of players go to the next state
		if (currentPlayer > numPlayers - 1) {
			nextState();
		}
		// computer player plays a card, taking a random number between 1 and 3 seconds
		setTimeout(() => {
			computerPlayedCard(currentPlayer);
		}, (Math.floor(Math.random() * 3 + 1)) * 250);

	}, [currentPlayer])
	return (
		<div>
			<button onClick={() => setCurrentPlayer(prev => prev + 1)}>DEBUG Increment Player</button>
		</div>
	);
};

export default PlayerChooseCardState;
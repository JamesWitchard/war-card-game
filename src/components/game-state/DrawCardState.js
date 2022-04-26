/*
	Game state for dealing the cards from the player deck to the players hand
	TODO: Look into CSS animations for cards flying from the player decks to the players hand.
 */

import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const DrawCardState = () => {

	const {nextState, drawCards, initializeRound} = useContext(GameStateContext);

	useEffect(() => {
		setTimeout(() => {
			initializeRound();
			drawCards();
			nextState();
		}, 1000)
	}, [])
	return (
		<div>
			Each player draws 5 cards.
		</div>
	);
};

export default DrawCardState;
/*
	Game state for dealing from the deck to each of the players
	TODO: Look into CSS animations for cards flying to the player decks from center screen
	TODO: Cards in hand "fanned out"
 */

import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const SetDecksState = () => {

	const {numPlayers, nextState, dealDecks} = useContext(GameStateContext)

	useEffect(() => {
		dealDecks();
		setTimeout(() => {
			nextState();
		}, 1500)
	}, [])

	return (
		<p>
			{`Dealing cards out to ${numPlayers} players.`}
		</p>
	);
};

export default SetDecksState;
/*
	Determine out of all the players who played the highest value card
 */

import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const DetermineSkirmishWinnerState = () => {

	const {nextState, playedCard, handleSkirmishWinner} = useContext(GameStateContext);

	useEffect(() => {
		// copy played cards array to temporary array to allow us to mutate it.
		const tempPlayedCard = [...playedCard];
		const highestCardValue = tempPlayedCard.reduce((curr, prev) => {
			return (curr.getCardValue > prev.getCardValue) ? curr : prev;
		});
		let winners = tempPlayedCard.map((item, idx, arr) => {
			return item.getCardValue;
		});
		winners = winners.map((item, idx, arr) => {
			return winners.indexOf(highestCardValue.getCardValue, idx);
		});

		winners = winners.filter((item, idx) => {
			return winners.indexOf(item) === idx && item >= 0;
		});

		handleSkirmishWinner(winners, highestCardValue.getValue);

		setTimeout(() => {
			nextState();
		}, 1000)
	}, [])
	return (
		<div>
			Determining winner...
		</div>
	);
};

export default DetermineSkirmishWinnerState;
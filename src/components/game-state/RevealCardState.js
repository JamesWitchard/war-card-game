/*
	Game state for revealing the cards that were played in the last round, then go into next state.
	TODO: Card flip animation
 */

import React, {useContext, useEffect, useState} from 'react';
import {GameStateContext} from "../../App";

const RevealCardState = () => {
	const [countDown, setCountDown] = useState(1);

	const {revealCards, nextState} = useContext(GameStateContext);

	useEffect(() => {
		const timer = setInterval(() => {
			if (countDown <= 0) {
				revealCards();
				clearInterval(timer);
				nextState();
				return;
			}
			setCountDown(prevState => countDown - 1);
		}, 1000)
		return () => {
			clearInterval(timer);
		}
	}, [countDown])
	return (
		<div>
			{countDown > 0 ? `Revealing in ${countDown}...` : "Revealed"}

		</div>
	);
};

export default RevealCardState;

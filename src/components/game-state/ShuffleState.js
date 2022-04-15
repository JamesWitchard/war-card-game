import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const ShuffleState = () => {

	const {nextState, startGame} = useContext(GameStateContext);

	useEffect(() => {
		startGame();
		setTimeout(() => {
			nextState();
		}, 1500)
	}, [])
	return (
		<p>
			Shuffling the deck.
		</p>
	);
};

export default ShuffleState;
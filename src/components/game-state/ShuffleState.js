import React, {useEffect} from 'react';

const ShuffleState = ({nextState, startGame}) => {

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
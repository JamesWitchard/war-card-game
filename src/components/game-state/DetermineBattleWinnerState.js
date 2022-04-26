/*
	Game state to determine who wins the battle (the best out of three)
 */

import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const DetermineBattleWinnerState = () => {
	const {nextState} = useContext(GameStateContext);

	useEffect(() => {
		setTimeout(() => {
			nextState();
		}, 1000)
	});

	return (
		<div>
			Determining winner of the battle...
		</div>
	);
};

export default DetermineBattleWinnerState;
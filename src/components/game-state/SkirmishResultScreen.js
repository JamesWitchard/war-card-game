/*
	Game state that shows the results of the skirmish, and assigning a point to the winning player (or players if it's a
	draw), then loops back to the playerChooseCard state. If one player gets to three points, then change state to the
	"determineBattleWinner" state.
 */

import React, {useContext, useEffect, useState} from 'react';
import {GameStateContext} from "../../App";
import {GAME_STATE} from "../../helpers/GameState";

const SkirmishResultScreen = () => {

	const {skirmishWinners, highestCardValue, initializePlayedCards, nextState, playerScore, gotoState} = useContext(GameStateContext);

	useEffect(() => {
		initializePlayedCards();
		if (playerScore.some(item => item >= 3)) {
			gotoState(GAME_STATE.determineBattleWinner);
			return;
		}
		setTimeout(nextState, 1500);
	}, [])
	return (
		<div>
			{`The winner is ${skirmishWinners.length > 1 ? "Players:" : "Player"} ${skirmishWinners.map(it => it + 1).join(", ")} with the 
			card ${highestCardValue}`}
			<div>
				<button onClick={nextState}>Okay!</button>
			</div>
		</div>
	);
};

export default SkirmishResultScreen;
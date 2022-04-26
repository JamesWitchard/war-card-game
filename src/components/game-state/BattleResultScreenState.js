/*
	Game state that shows the results of the battle, then shuffles player hand's to the bottom of the deck, all the
	played cards to the bottom of the battle winner's deck, then sets the state to the drawCards state. Before setting
	the next state determine if there's any players with no cards and kick them from the game loop, if one player is
	left standing, they are the winner of the war.
 */

import {useContext, useEffect, useState} from "react";
import {GameStateContext} from "../../App";

const BattleResultScreenState = () => {

	const {playerScore, battleWinner, updateBattleWinner, nextState, gotoState} = useContext(GameStateContext);

	useEffect(() => {
		const winner = playerScore.findIndex(item => item >= 3);
		updateBattleWinner(winner)

	}, [])
	return (
		<>
			<div> {`Player ${battleWinner + 1} wins the battle. But who will win the war?`}</div>
			<button onClick={nextState}>Next Round</button>
		</>
	);
};

export default BattleResultScreenState;
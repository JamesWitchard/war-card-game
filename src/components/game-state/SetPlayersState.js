/*
* State for setting the amount of players.
* TODO: Find or make graphics for the number of players.
* */

import React, {useContext} from 'react';
import {GameStateContext} from "../../App";

const SetPlayersState = () => {
	const {setNumberOfPlayers} = useContext(GameStateContext)


	return (
		<>
			<button value="2" onClick={e => setNumberOfPlayers(e.target.value)}>Two Players!</button>
			<button value="3" onClick={e => setNumberOfPlayers(e.target.value)}>Three Players!</button>
			<button value="4" onClick={e => setNumberOfPlayers(e.target.value)}>Four Players!</button>
			{/*<button value="5" onClick={e => setNumberOfPlayers(e.target.value)}>Five Players!</button>*/}
			{/*<button value="6" onClick={e => setNumberOfPlayers(e.target.value)}>Six Players!</button>*/}
			{/*<button value="7" onClick={e => setNumberOfPlayers(e.target.value)}>Seven Players!</button>*/}
			{/*<button value="8" onClick={e => setNumberOfPlayers(e.target.value)}>Eight Players!</button>*/}
			{/*<button value="9" onClick={e => setNumberOfPlayers(e.target.value)}>Nine Players!</button>*/}
			{/*<button value="10" onClick={e => setNumberOfPlayers(e.target.value)}>Ten Players!</button>*/}
		</>
	);
};

export default SetPlayersState;
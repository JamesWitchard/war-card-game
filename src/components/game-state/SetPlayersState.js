import React, {useContext} from 'react';
import {GameStateContext} from "../../App";

const SetPlayersState = () => {
	const {setNumberOfPlayers} = useContext(GameStateContext)


	return (
		<>
			<button value="2" onClick={e => setNumberOfPlayers(e.target.value)}>Two Players!</button>
			<button value="3" onClick={e => setNumberOfPlayers(e.target.value)}>Three Players!</button>
			<button value="4" onClick={e => setNumberOfPlayers(e.target.value)}>Four Players!</button>
		</>
	);
};

export default SetPlayersState;
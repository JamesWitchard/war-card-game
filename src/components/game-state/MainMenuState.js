import React, {useContext} from 'react';
import {GameStateContext} from "../../App";

const MainMenuState = () => {
	const {nextState} = useContext(GameStateContext);
	return (
		<>
			<button onClick={() => nextState()}>Start Game!</button>
		</>
	);
};

export default MainMenuState;
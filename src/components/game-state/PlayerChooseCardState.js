import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const PlayerChooseCardState = () => {

	const {hands, playerIndex, numPlayers} = useContext(GameStateContext)

	useEffect(() => {
		console.log("Hello")
	}, [hands])
	return (
		<div>

		</div>
	);
};

export default PlayerChooseCardState;
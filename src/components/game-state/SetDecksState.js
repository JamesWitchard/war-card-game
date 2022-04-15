import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const SetDecksState = () => {

	const {numPlayers, nextState, dealDecks} = useContext(GameStateContext)

	useEffect(() => {
		dealDecks();
		setTimeout(() => {
			nextState();
		}, 1500)
	}, [])

	return (
		<p>
			{`Dealing cards out to ${numPlayers} players.`}
		</p>
	);
};

export default SetDecksState;
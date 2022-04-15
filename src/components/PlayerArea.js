import React, {useContext} from 'react';
import {GameStateContext} from "../App";
import DeckComponent from "./DeckComponent";

const PlayerArea = ({playerIndex}) => {

	const {playerDecks} = useContext(GameStateContext);

	return (
		<div>
			<DeckComponent playerIndex={playerIndex}/>
		</div>
	);
};

export default PlayerArea;
import React, {useContext} from 'react';
import {GameStateContext} from "../App";
import DeckComponent from "./DeckComponent";
import {PlayerAreaStyle} from "../styles/PlayerArea.style";
import HandComponent from "./HandComponent";

const PlayerArea = ({playerIndex}) => {

	const {playerDecks} = useContext(GameStateContext);

	return (
		<PlayerAreaStyle>
			<DeckComponent playerIndex={playerIndex}/>
			<HandComponent playerIndex={playerIndex} />
		</PlayerAreaStyle>
	);
};

export default PlayerArea;
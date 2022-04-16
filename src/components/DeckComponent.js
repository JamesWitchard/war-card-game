import React, {useContext} from 'react';
import {DeckComponentStyle} from "../styles/DeckComponent.style";
import {GameStateContext} from "../App";

//import "../styles/DeckComponent.style.css"

const DeckComponent = ({playerIndex}) => {

	const {playerDecks} = useContext(GameStateContext)
	return (
		<DeckComponentStyle>
			{playerDecks[playerIndex].cards.length}
		</DeckComponentStyle>
	);
};

export default DeckComponent;
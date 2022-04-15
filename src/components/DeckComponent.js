import React, {useContext} from 'react';
import {DeckStyle} from "../styles/Deck.Style";
import {GameStateContext} from "../App";

//import "../styles/DeckComponent.style.css"

const DeckComponent = ({playerIndex}) => {

	const {playerDecks} = useContext(GameStateContext)
	return (
		<DeckStyle>
			{playerDecks[playerIndex].cards.length}
		</DeckStyle>
	);
};

export default DeckComponent;
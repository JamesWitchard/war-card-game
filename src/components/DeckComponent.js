import React, {useContext} from 'react';
import {DeckComponentStyle} from "../styles/DeckComponent.style";
import {GameStateContext} from "../App";
import CardComponent from "./CardComponent";

//import "../styles/DeckComponent.style.css"

const DeckComponent = ({playerIndex}) => {

	const {playerDecks} = useContext(GameStateContext)
	return (
		<DeckComponentStyle>
			<CardComponent isFaceDown={true}>
				<h1>{playerDecks[playerIndex].cards.length}</h1>
			</CardComponent>
		</DeckComponentStyle>
	);
};

export default DeckComponent;
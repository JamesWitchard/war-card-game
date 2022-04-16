import React, {useContext} from 'react';
import {GameStateContext} from "../App";
import {HandStyle} from "../styles/Hand.style";
import CardComponent from "./CardComponent";

const HandComponent = ({playerIndex}) => {

	const {playerHands} = useContext(GameStateContext)


	return (
		<HandStyle>
			{playerHands[playerIndex]?.map((card, index) =>
				<CardComponent
					key={`player-${playerIndex+1}-card-${index}`}
					card={card}
					playerIndex={playerIndex}
					cardIndex={index}/>)}
		</HandStyle>
	);
};

export default HandComponent;
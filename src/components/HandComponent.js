import React, {useContext} from 'react';
import {GameStateContext} from "../App";
import {HandComponentStyle} from "../styles/HandComponent.style";
import CardComponent from "./CardComponent";
import {GAME_STATE} from "../helpers/GameState";

const HandComponent = ({playerIndex}) => {

	const {gameState, playerHands, currentPlayer} = useContext(GameStateContext)


	return (
		<HandComponentStyle>
			{playerHands[playerIndex]?.map((card, index) =>
				<CardComponent
					key={`player-${playerIndex+1}-card-${index}`}
					card={card}
					playerIndex={playerIndex}
					cardIndex={index}
					interactable={playerIndex === 0 && currentPlayer === 0 && gameState === GAME_STATE.playerChooseCard}
					isFaceDown={playerIndex > 0}
				/>)}
		</HandComponentStyle>
	);
};

export default HandComponent;
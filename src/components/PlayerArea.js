import React, {useContext, useEffect, useState} from 'react';
import {GameStateContext} from "../App";
import DeckComponent from "./DeckComponent";
import {PlayerAreaStyle} from "../styles/PlayerArea.style";
import HandComponent from "./HandComponent";
import PlayedCardsComponent from "./PlayedCardsComponent";
import PokerChipComponent from "./PokerChipComponent";

const PlayerArea = ({playerIndex}) => {

	// const {battleWinner, cardsIntoDeck} = useContext(GameStateContext);

	return (
		<PlayerAreaStyle>
			<DeckComponent playerIndex={playerIndex} />
			<div className="playedCardLayout">
				<PlayedCardsComponent playerIndex={playerIndex} />
				<HandComponent playerIndex={playerIndex} />
			</div>
			<div className="playerScores">

			</div>

		</PlayerAreaStyle>
	);
};

export default PlayerArea;
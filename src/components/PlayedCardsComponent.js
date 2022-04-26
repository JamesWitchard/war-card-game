import React, {useContext, useEffect, useState} from 'react';
import {PlayedCardsComponentStyle} from "../styles/PlayedCardComponent.style";
import {GameStateContext} from "../App";
import CardComponent from "./CardComponent";
import {Card} from "../helpers/Deck";
import {GAME_STATE} from "../helpers/GameState";


const PlayedCardsComponent = ({playerIndex}) => {

	const [playedCardsHistory, setPlayedCardsHistory] = useState([]);

	const {cardsIntoDeck, playedCard, numPlayers, battleWinner, playerDecks, revealed} = useContext(GameStateContext)

	const initCardsHistory = () => {
		const tempHistory = []
		for (let i = 0; i < numPlayers; i++) {
			tempHistory[i] = tempHistory[i] || [];
		}
		setPlayedCardsHistory([...tempHistory]);
	}

	useEffect(() => {
		if (playedCard[playerIndex].getSuit !== null) {
			const tempHistory = [...playedCardsHistory];
			tempHistory[playerIndex] = [...tempHistory[playerIndex], playedCard[playerIndex]];
			setPlayedCardsHistory([...tempHistory]);
		}
	}, [playedCard[playerIndex]])

	useEffect(() => {
		if (battleWinner === null) return;
		if (battleWinner !== playerIndex) return;
		cardsIntoDeck(playerIndex, playedCardsHistory[playerIndex]);

	}, [battleWinner])

	useEffect(initCardsHistory, [playerDecks])

	useEffect(initCardsHistory, [])

	return (
		<PlayedCardsComponentStyle>
			{playedCardsHistory[playerIndex]?.map((card, index) =>
				<CardComponent
					key={`played-${playerIndex+1}-card-${index}`}
					card={card}
					playerIndex={playerIndex}
					isFaceDown={!revealed}
					cardGroup={"playedCard"}
				/>
			)}
		</PlayedCardsComponentStyle>
	);
};

export default PlayedCardsComponent;
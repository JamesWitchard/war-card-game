import React, {useContext, useEffect} from 'react';
import {GameStateContext} from "../../App";

const DrawCardState = () => {

	const {numPlayers, playerDecks, drawCards, playerHands} = useContext(GameStateContext);

	useEffect(() => {
		drawCards();
	}, [])
	return (
		<>
			<button onClick={drawCards}>Draw!</button>
			{playerDecks.map((deck, index) => {
				return <p key={`deck-${index}`}><strong>{`Player ${index + 1} Deck - `}</strong>
					{deck.cards.length} </p>})}
			{/*{playerHands.map((player, index) => {*/}
			{/*	return <p key={`hand-${index + 1}`}><strong>{`Player ${index + 1} Hand - `}</strong>*/}
			{/*		{player.map((card, idx) => {*/}
			{/*			return <span key={`hand${index + 1}-card${idx}`}>{`${card.printCard()}, `}</span>*/}
			{/*		})}*/}
			{/*	</p>})}*/}
		</>
	);
};

export default DrawCardState;
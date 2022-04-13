import React, {useEffect} from 'react';

const DrawCardState = ({playerNum, playerDecks, drawCards, playerHands}) => {

	useEffect(() => {
		console.log(playerDecks)
		drawCards();
	}, [])
	return (
		<>
			<button onClick={drawCards}>Draw!</button>
			{playerDecks.map((deck, index) => {
				return <p key={`deck-${index}`}><strong>{`Player ${index + 1} Deck - `}</strong>
					{deck.cards.length} </p>})}
			{playerHands.map((player, index) => {
				return <p key={`hand-${index + 1}`}><strong>{`Player ${index + 1} Hand - `}</strong>
					{player.map((card, idx) => {
						return <span key={`hand${index + 1}-card${idx}`}>{`${card.value}${card.suit}, `}</span>
					})}
				</p>})}
		</>
	);
};

export default DrawCardState;
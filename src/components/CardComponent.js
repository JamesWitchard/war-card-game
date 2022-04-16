import React, {useContext, useEffect, useState} from 'react';
import {CardComponentStyle} from "../styles/CardComponent.style";
import {GameStateContext} from "../App";

const CardComponent = ({card, playerIndex, cardIndex}) => {

	const [faceDown, setFaceDown] = useState(true);
	const {playCard, currentPlayer, revealed} = useContext(GameStateContext)
	const cardName = card.printCard();

	const cardTheme = {
		faceUp: {
			background: '#fff',
			color: (card.getSuit === '♥' || card.getSuit === '♦') ? '#f00' : '#000'
		},
		faceDown: {
			background: 'repeating-linear-gradient(' +
				'30deg,' +
				'transparent 0%,' +
				'transparent 1%,' +
				'white 1%,' +
				'white 1.5%' +
				'),' +
				'repeating-linear-gradient(' +
				'-30deg,' +
				'transparent 0%,' +
				'transparent 1%,' +
				'white 1%,' +
				'white 1.5%' +
				'),'+
				'red',
			colour: 'inherit'
		}
	}

	const cardClicked = () => {
		if (currentPlayer === 0 && playerIndex === 0) {
			playCard(cardIndex, playerIndex);
		}
	}

	useEffect(() => {
		setFaceDown(playerIndex !== 0);
	}, [])

	return (
		<CardComponentStyle
			playerIndex={playerIndex}
			card={card.printCard()}
			onClick={cardClicked}
			suit={card.getSuit}
			faceDown={faceDown}
			theme={faceDown ? cardTheme.faceDown : cardTheme.faceUp}
		>
			{(!faceDown) && card.getSuit}

		</CardComponentStyle>
	);
};

export default CardComponent;
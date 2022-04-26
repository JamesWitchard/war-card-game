import React, {useContext, useEffect, useState} from 'react';
import {CardComponentStyle} from "../styles/CardComponent.style";
import {GameStateContext} from "../App";

const CardComponent = ({card = null, playerIndex = null, cardIndex = null, interactable, isFaceDown, cardGroup, children}) => {

	const [faceDown, setFaceDown] = useState(isFaceDown);
	const {playCard, currentPlayer, revealed} = useContext(GameStateContext)

	const cardTheme = {
		faceUp: {
			background: '#fff',
			color: (card?.getSuit === '♥' || card?.getSuit === '♦') ? '#f00' : '#000',
			border: "none",
			content: card?.printCard(),
			cursor: (interactable ? "pointer" : "inherit"),
			transform: ""
		},
		faceDown: {
			background: 'repeating-linear-gradient(' +
				'30deg,' +
				'transparent 0%,' +
				'transparent 3%,' +
				'white 3%,' +
				'white 3.5%' +
				'),' +
				'repeating-linear-gradient(' +
				'-30deg,' +
				'transparent 0%,' +
				'transparent 3%,' +
				'white 3%,' +
				'white 3.5%' +
				'),'+
				'#26BCF7',
			colour: 'inherit',
			border: "5px solid white",
			content: "",
			cursor: (interactable ? "pointer" : "inherit"),
			//transform: (cardGroup === "playedCard" && "rotateY(180deg)")
		}
	}

	const cardClicked = () => {
		if (!interactable) return;
		if (currentPlayer === 0 && playerIndex === 0) {
			playCard(cardIndex, playerIndex);
		}
	}

	useEffect(() => {
		if (revealed && cardGroup === "playedCard")
			setTimeout(() => {
				setFaceDown(false);
				}, (playerIndex + 1) * 150)

	}, [revealed])

	// useEffect(() => {
	// 	setFaceDown(playerIndex !== 0);
	// }, [])

	return (
		<CardComponentStyle
			playerIndex={playerIndex}
			card={card?.printCard()}
			onClick={cardClicked}
			faceDown={faceDown}
			cardGroup={cardGroup}
			interactable={interactable}
			theme={faceDown ? cardTheme.faceDown : cardTheme.faceUp}
		>
			{(!faceDown) && card?.getSuit}
			{children}
		</CardComponentStyle>
	);
};

export default CardComponent;
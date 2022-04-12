import React, {useEffect, useState} from 'react';

import "../styles/DisplayPlayedCard.style.css"

const DisplayPlayedCard = ({isPlayer, hidden, drawnCard}) => {
	const [cardColour, setCardColour] = useState("");

	useEffect(() => {
		setCardColour((drawnCard?.suit === "♥" || drawnCard?.suit === "♦") ? 'red' : "black");
		//console.log(drawnCard)
	}, [drawnCard])
	return (
		<div
			className={` ${(isPlayer) ? "player" : "computer"}-played-card 
				played-card 
				${cardColour}
				card-layout 
				${hidden ? 'hidden' : ''}`}
			data-value={`${drawnCard?.value} ${drawnCard?.suit}`}
		>
			{drawnCard?.suit}
		</div>
	);
};

export default DisplayPlayedCard;
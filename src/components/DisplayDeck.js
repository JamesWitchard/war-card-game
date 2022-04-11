import React from 'react';

import "../styles/DisplayDeck.style.css"

const DisplayDeck = ({isPlayer, cardNum}) => {
	return (
		<div className={`card-layout ${(isPlayer) ? "player" : "computer"}-deck deck` }>
			{cardNum}
		</div>
	);
};

export default DisplayDeck;
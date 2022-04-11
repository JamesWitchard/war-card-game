import React from 'react';

import "../styles/DisplayDeck.style.css"

const DisplayDeck = ({isPlayer}) => {
	return (
		<div className={`card-layout ${(isPlayer) ? "player" : "computer"}-deck deck`}>
			26
		</div>
	);
};

export default DisplayDeck;
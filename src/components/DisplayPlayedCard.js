import React from 'react';

import "../styles/DisplayPlayedCard.style.css"

const DisplayPlayedCard = ({isPlayer}) => {
	return (
		<div
			className={` ${(isPlayer) ? "player" : "computer"}-played-card played-card red card-layout `}
			data-value="9♥"
		>
			♥
		</div>
	);
};

export default DisplayPlayedCard;
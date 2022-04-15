import React from 'react';

import DeckComponent from "./DeckComponent";
import DisplayPlayedCard from "./DisplayPlayedCard";

//import "../styles/PlayArea.style.css"

const PlayArea = ({isPlayer, deck, hidden, drawnCard}) => {
	return (
		<div className="play-area">
			{!isPlayer && <h1>{isPlayer ? "Player" : "Computer"} Area</h1>}
			<div className="cards-area">
				<DeckComponent isPlayer={isPlayer} cardNum={deck.numberOfCards}/>
				<DisplayPlayedCard isPlayer={isPlayer} hidden={hidden} drawnCard={drawnCard}/>
			</div>
			{isPlayer && <h1>{isPlayer ? "Player" : "Computer"} Area</h1>}
		</div>
	);
};

export default PlayArea;
import React from 'react';

import DisplayDeck from "./DisplayDeck";
import DisplayPlayedCard from "./DisplayPlayedCard";

import "../styles/PlayArea.style.css"

const PlayArea = ({isPlayer}) => {
	return (
		<div className="play-area">
			<h1>{isPlayer ? "Player" : "Computer"} Area</h1>
			<div className="cards-area">
				<DisplayDeck isPlayer={isPlayer}/>
				<DisplayPlayedCard isPlayer={isPlayer}/>
			</div>
		</div>
	);
};

export default PlayArea;
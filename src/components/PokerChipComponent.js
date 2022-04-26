import React from 'react';
import {PokerChipStyle} from "../styles/PokerChip.style";

const PokerChipComponent = () => {
	return (
		<PokerChipStyle>
			<div className="red-suits"/>
			<div className="black-suits"/>
			<div className="inner-raised"/>
			<div className="inner-groove"/>
			<div className="inner"/>
		</PokerChipStyle>
	);
};

export default PokerChipComponent;
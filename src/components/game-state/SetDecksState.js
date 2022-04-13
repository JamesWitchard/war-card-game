import React, {useEffect} from 'react';

const SetDecksState = ({playerNum, nextState, dealDecks}) => {

	useEffect(() => {
		dealDecks();
		setTimeout(() => {
			nextState();
		}, 1500)
	}, [])

	return (
		<p>
			{`Dealing cards out to ${playerNum} players.`}
		</p>
	);
};

export default SetDecksState;
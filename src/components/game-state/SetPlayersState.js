import React from 'react';

const SetPlayersState = ({clickEvent}) => {

	return (
		<>
			<button value="2" onClick={e => clickEvent(e.target.value)}>Two Players!</button>
			<button value="3" onClick={e => clickEvent(e.target.value)}>Three Players!</button>
			<button value="4" onClick={e => clickEvent(e.target.value)}>Four Players!</button>
		</>
	);
};

export default SetPlayersState;
import styled from "styled-components";

export const PlayerAreaStyle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  user-select: none;
  
  & > .playedCardLayout {
    flex-grow: 2;

  }
  & > .playerScores {
    display: flex;
	width: calc(75px * 3);
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-grow: 1;
  }
`;
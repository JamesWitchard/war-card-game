import styled from "styled-components";

export const DeckComponentStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-grow: 1;
  position: relative;
  margin-inline: 1rem;
  
  h1 {
    position: absolute;
    color: white;
    text-shadow: 0 0 .25rem firebrick,
    0 0 .5rem orangered,
    0 0 3rem white,
    0 0 3rem white,
    0 0 3rem white,
    0 0 3rem white,
    0 0 3rem white,
    0 0 3rem white;
    z-index: 100;
  }
`;
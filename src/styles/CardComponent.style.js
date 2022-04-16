import styled from "styled-components";

const width = "75px";

export const CardComponentStyle = styled.div`
  width: ${width};
  border-radius: 0.5rem;
  height: 100px;
  border: 2px solid black;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.color};
  background: ${({theme}) => theme.background};
  cursor: ${props => (props.playerIndex === 0 ? 'pointer' : 'inherit')};
  
  
  &:before, &:after {
    position: absolute;
    content: "${props => !props.faceDown && props.card}";
  }
  
  &:before {
    top: 3%;
    left: 3%;
  }
  
  &:after {
    bottom: 3%;
    right: 3%;
    transform: rotate(180deg);
  }
`;
import styled from "styled-components";


export const CardComponentStyle = styled.div`
  box-sizing: border-box;
  border-radius: 0.5rem;
  height: 100px;
  aspect-ratio: 0.73 / 1;
  border: ${({theme}) => theme.border};
  box-shadow: 1px 1px 4px hsla(0, 0%, 0%, 0.75);

  display: flex;
  position: relative;
  justify-self: center;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.color};
  background: ${({theme}) => theme.background};
  cursor: ${({theme}) => theme.cursor};
  transition: transform 500ms ease-in-out;
  transform-style: preserve-3d;
  transform: ${({theme}) => theme.transform};
  perspective: 1000px;

  &:before, &:after {
    position: absolute;
    content: "${({theme}) => theme.content}";
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
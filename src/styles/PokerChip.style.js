import styled from "styled-components";

export const PokerChipStyle = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  
  height: 75px;
  width: 75px;
  border-radius: 100%;
  border: 11px solid var(--poker-chip-red);
  background-color: transparent;
  color: white;
  font-size: 0.8rem;
  position: relative;
  
  box-shadow: 4px 2px 4px hsla(10, 0%, 0%, 0.75);
  
  & > .inner-raised {
    background-color: var(--poker-chip-red);
    width: 92%;
    height: 92%;
    border-radius: 50%;
    box-shadow: 4px 2px 4px hsla(10, 0%, 0%, 0.3);
    z-index: 21;
    
  }

  & > .inner-groove {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 2px 2px 2px hsla(10, 0%, 0%, 0.3);
    border-radius: 50%;
    z-index: 20;
  }

  & > .inner {
    position: absolute;
    background-color: var(--poker-chip-red);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px dashed white;
  }
  
  & > .red-suits {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  
  & > .black-suits {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotate(90deg);
  }

  & > .red-suits:before, & > .red-suits:after {
    position: absolute;
    display: flex;
    justify-self: center;
    align-self: center;
  }

  & > .red-suits:before {
    top: -29%;
    left: 42.5%;
    content: "♦";
  }

  & > .red-suits:after {
    content: "♥";
    bottom: -29%;
    left: 42.5%;
    transform: rotate(180deg);
  }

  & > .black-suits:before, & > .black-suits:after {
    position: absolute;
    display: flex;
    justify-self: center;
    align-self: center;
  }

  & > .black-suits:before {
    top: -29%;
    left: 42.5%;
    content: "♣";
  }

  & > .black-suits:after {
    content: "♠";
    bottom: -29%;
    left: 42.5%;
    transform: rotate(180deg);
  }
`;
import React from 'react';
import styled, { keyframes } from 'styled-components';

const TranslateZAllMenu = ({ list }) => {
  return (
    <MenuContainer>
      TranslateZ
      <List>
        {list.map((item, key) => (
          <ListItem key={key}>{item}</ListItem>
        ))}
      </List>
    </MenuContainer>
  );
};

export default TranslateZAllMenu;

const Anim = keyframes`
   0% {
    opacity: 0;
    transform: translateZ(20rem) translateY(-10%);
  }
  80% {
    opacity: 1;
    transform: translateZ(1rem) translateY(-3%);
  }
  100% {
    opacity: 1;
    transform: translateZ(0) translateY(0);;
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 700;
  font-size: 1.5rem;
  border: 2px solid #808080;
  background-color: #77ccff;
  box-sizing: border-box;
  perspective: 1000px;

  &:hover {
    > ul {
      visibility: visible;
      opacity: 0;
      animation: ${Anim} 300ms ease-in-out forwards;
    }
  }
`;

const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  visibility: hidden;
`;

const ListItem = styled.li`
  width: 100%;
  height: 4rem;
  background: #666;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

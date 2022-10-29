import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotateAllMenu = ({ list }) => {
  return (
    <MenuContainer>
      Rotate
      <List>
        {list.map((item, key) => (
          <ListItem key={key}>
            {item}
          </ListItem>
        ))}
      </List>
    </MenuContainer>
  );
};

export default RotateAllMenu;

const Anim = keyframes`
   0% {
    opacity: 0;
    transform: rotateY(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
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

  &:hover {
    > ul {
      visibility: visible;
      opacity: 0;
      animation: ${Anim} 300ms ease-in-out forwards;
    }
  }
`;

const List = styled.ul`
  perspective: 1000px;
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

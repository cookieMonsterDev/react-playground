import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScaleEachMenu = ({ list }) => {
  return (
    <MenuContainer>
      Scale
      <List>
        {list.map((item, key) => (
          <ListItem style={{ animationDelay: `${100 * key}ms` }} key={key}>
            {item}
          </ListItem>
        ))}
      </List>
    </MenuContainer>
  );
};

export default ScaleEachMenu;

const Anim = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  90% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
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
    > ul > li {
      display: flex;
      justify-content: center;
      align-items: center;
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
`;

const ListItem = styled.li`
  width: 100%;
  height: 4rem;
  background: #666;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: none;
`;

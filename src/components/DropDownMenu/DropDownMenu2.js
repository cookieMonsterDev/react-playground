import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const DropDownMenu2 = () => {
  const [active, setActive] = useState(false);

  return (
    <Window>
      <MenuContainer>
        DropDown list
        <List>
          <ListItem>uno</ListItem>
          <ListItem>dos</ListItem>
          <ListItem>tres</ListItem>
        </List>
      </MenuContainer>
    </Window>
  );
};

export default DropDownMenu2;

const Window = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Anim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MenuContainer = styled.div`
  width: 30rem;
  height: 4rem;
  background-color: yellowgreen;
  position: relative;

  &:hover {
    > ul > li {
      display: block;
      opacity: 0;
      animation: ${Anim} 300ms ease-in-out forwards;
    }

    > ul > li:nth-child(1) {
      animation-delay: 0;
    }

    > ul > li:nth-child(2) {
      animation-delay: 300ms;
    }

    > ul > li:nth-child(3) {
      animation-delay: 600ms;
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

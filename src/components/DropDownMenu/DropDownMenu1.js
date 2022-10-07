import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const DropDownMenu1 = () => {
  const [active, setActive] = useState(false);

  return (
    <Window>
      <MenuBox>
        <MenuButton onClick={() => setActive(!active)}>
          Web Dev Items
        </MenuButton>
        <List isActive={active}>
          <li key={1}>
            <a href="https://www.youtube.com/">HTML/CSS</a>
          </li>
          <li key={2}>
            <a href="https://www.youtube.com/">JavaScript</a>
          </li>
          <li key={3}>
            <a href="https://www.youtube.com/">PHP</a>
          </li>
          <li key={4}>
            <a href="https://www.youtube.com/">Python</a>
          </li>
          <li key={5}>
            <a href="https://www.youtube.com/">NodeJs</a>
          </li>
        </List>
      </MenuBox>
      <div> test </div>
    </Window>
  );
};

export default DropDownMenu1;

const Window = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const MenuBox = styled.nav`
  width: 200px;
  height: 4rem;
  position: relative
`;

const MenuButton = styled.button`
  width: 100%;
  font-size: 18px;
  padding: 10px 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 10px;
  padding: 0;
  

  > li {
    margin: 5px 0;
    border-radius: 3px;
    opacity: 0;
    transition: 0.5s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.1s;
  }

  > li > a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 8px 10px;
    display: block;
  }

  > li:nth-child(odd) {
    background-color: #2e86de;
    transform: rotateZ(50deg);
    transform-origin: left center;
  }

  > li:nth-child(even) {
    background-color: #54a0ff;
    transform: rotateZ(-50deg);
    transform-origin: right center;
  }

  ${(props) =>
    props.isActive &&
    css`
      > li {
        opacity: 1;
        transform: none;
      }

      > li:nth-child(odd) {
        transform: none;
      }

      > li:nth-child(even) {
        transform: none;
      }
    `}
`;

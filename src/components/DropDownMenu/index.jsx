import styled from 'styled-components';
import TranslateYEachMenu from './TranslateY_each_Menu';
import TranslateXEachMenu from './TranslateX_each_Menu';
import ScaleEachMenu from './Scale_each_Menu';
import RotateEachMenu from './Rotate_each_Menu';
import TranslateZEachMenu from './TranslateZ_each_Menu';

const dataList = ['Item-1', 'Item-2', 'Item-3'];

const DropDowns = () => {
  return (
    <Window>
      <h1>Animate Each Menu Items</h1>
      <List>
        <ListItem>
          <TranslateYEachMenu list={dataList} />
        </ListItem>
        <ListItem>
          <TranslateXEachMenu list={dataList} />
        </ListItem>
        <ListItem>
          <ScaleEachMenu list={dataList} />
        </ListItem>
        <ListItem>
          <RotateEachMenu list={dataList} />
        </ListItem>
        <ListItem>
          <TranslateZEachMenu list={dataList} />
        </ListItem>
      </List>

      <h1>Animate the Whole Menu</h1>
      <List>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </List>
    </Window>
  );
};

export default DropDowns;

const Window = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1:nth-of-type(2) {
    margin-top: 12rem;
  }
`;

const List = styled.ul`
  width: 100%;
  height: 3rem;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

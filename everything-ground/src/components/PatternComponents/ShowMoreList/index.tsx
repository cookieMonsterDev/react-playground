import { useRef, useState, useEffect } from 'react';
import data from './data/initData.json';
import './style/list.scss';
import './style/global.scss';
import Card from './components/Card';

export interface ListData {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
}

function ShowMoreList() {
  const [expanded, setExpanded] = useState(false);
  const [list, setList] = useState<ListData[]>([]);
  const render = useRef<boolean>(true);

  useEffect(() => {
    if (render.current) {
      render.current = false;
      setList(data);
    }
  }, []);

  const defList = list.slice(0, 3);
  const restList = list.slice(3);

  return (
    <div className="wrapper">
      <div className='list-wrapper'>
      <ul className="list">
        {defList.map((i, j) => {
          return (
            <li key={j}>
              <Card {...{...i, index: j, animation: false}} />
            </li>
          );
        })}
        {expanded &&
          restList.map((i, j) => {
            return (
              <li key={j}>
                <Card {...{...i, index: j, animation: true}} />
              </li>
            );
          })}
      </ul>
      </div>
      <button onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

export default ShowMoreList;

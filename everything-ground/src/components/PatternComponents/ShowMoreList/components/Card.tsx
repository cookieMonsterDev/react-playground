import { useState } from 'react';
import { ListData } from '../index';
import '../style/card.scss';

interface ListDataMod extends ListData {
  index: number;
  animation: boolean;
}

function Card({
  phone,
  name,
  nickname,
  email,
  position,
  photo,
  index,
  animation,
}: ListDataMod) {

  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <div
      className={animation ? `list-card` : `list-card no-animation`}
      style={animation ? { animationDelay: `${250 * index}ms` } : {}}
    >
      <section>
        <img
          src={require(`../data/img/${photo}`)}
          alt={name}
          className="list-card__image"
        />
        <ul className="list-card__data-list">
          <li>{name}</li>
          <li>{position}</li>
        </ul>
        <hr className="list-card__stripe" />
      </section>
      <section>
        <span className="list-card__btn" onClick={() => setExpanded(true)}>
          <div />
        </span>
      </section>
    </div>
    <div className={expanded ? 'sth open' : `sth`} onClick={() => setExpanded(false)}></div>
    </>
  );
}

export default Card;

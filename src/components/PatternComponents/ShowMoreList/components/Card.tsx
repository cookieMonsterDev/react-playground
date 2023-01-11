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
  return (
    <div
      className="list-card"
      style={animation ? { animationDelay: `${250 * index}ms` } : {}}
    >
      <section></section>
      <section>
        <div className="list-card__btn">
          <span />
        </div>
      </section>
      <hr className="list-card__stripe" />
    </div>
  );
}

export default Card;

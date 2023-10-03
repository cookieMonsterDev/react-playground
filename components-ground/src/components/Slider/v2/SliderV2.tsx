import { useState } from "react";
import styles from "./SliderV2.module.css";

interface Img {
  url: string;
  alt: string;
}

interface SliderV2Props {
  imgs: Img[];
}

export const SliderV2 = ({ imgs }: SliderV2Props) => {
  const [cur, setCur] = useState(0);
  const l = imgs.length - 1;

  const next = () => {
    if (cur === l) {
      setCur(0);
    } else {
      setCur((prev) => ++prev);
    }
  };

  const prev = () => {
    if (cur === 0) {
      setCur(l);
    } else {
      setCur((prev) => --prev);
    }
  };

  return (
    <div className={styles.cont}>
      <button onClick={prev} className={styles.btn_left}>
        PREV
      </button>
      <div className={styles.img_cont}>
        {imgs.map((e) => (
          <img
            key={e.url}
            src={e.url}
            alt={e.alt}
            style={{ translate: `${-100 * cur}%` }}
            className={styles.img}
          />
        ))}
      </div>
      <button onClick={next} className={styles.btn_right}>
        NEXT
      </button>
    </div>
  );
};

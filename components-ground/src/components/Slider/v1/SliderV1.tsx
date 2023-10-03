import { useState } from "react";
import styles from "./SliderV1.module.css";

interface Img {
  url: string;
  alt: string;
}

interface SliderV1Props {
  imgs: Img[];
}

export const SliderV1 = ({ imgs }: SliderV1Props) => {
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
      <button onClick={prev}>PREV</button>
      <img src={imgs[cur].url} alt={imgs[cur].alt} className={styles.img}/>
      <button onClick={next}>NEXT</button>
    </div>
  );
};

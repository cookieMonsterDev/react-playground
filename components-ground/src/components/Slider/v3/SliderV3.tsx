import styles from "./SliderV3.module.css";

export const SliderV3 = () => {
  return (
    <section className={styles.container}>
      <div className={styles["slider-wrapper"]}>
        <div className={styles.slider}>
          <img
            id="slide-1"
            src="https://wallpapercave.com/wp/wp2825715.jpg"
            alt="planet-1"
          />
          <img
            id="slide-2"
            src="https://wallpapersmug.com/download/1920x1080/dce3b5/artwork-jelly-sky-planets.jpg"
            alt="planet-2"
          />
          <img
            id="slide-3"
            src="https://images7.alphacoders.com/100/1005643.jpg"
            alt="planet-3"
          />
        </div>
        <div className={styles["slider-nav"]}>
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>
    </section>
  );
};

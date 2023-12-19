import AutoWordsTyping from "@components/AutoWordsTyping";
import { SliderV1, SliderV2 } from "@components/Slider";

function App() {
  return (
    <main>
      <SliderV2
        imgs={[
          { url: "https://wallpapercave.com/wp/wp2825715.jpg", alt: "test-1" },
          {
            url: "https://wallpapersmug.com/download/1920x1080/dce3b5/artwork-jelly-sky-planets.jpg",
            alt: "test-2",
          },
          {
            url: "https://images7.alphacoders.com/100/1005643.jpg",
            alt: "test-3",
          },
        ]}
      />
    </main>
  );
}

export default App;

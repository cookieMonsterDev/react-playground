import { useState, useEffect } from "react";

type AutoWordsTypingProps = {
  text: string;
};

const AutoWordsTyping: React.FC<AutoWordsTypingProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const length = text.length - 1;

    const int = setInterval(() => {
      if (index >= length) {
        clearInterval(int);
        return;
      }

      setDisplayText((prev) => prev + text.at(index));
      index++;
    }, 10);

    return () => {
      clearInterval(int);
    };
  }, [text]);

  return <div>{displayText}</div>;
};

export default AutoWordsTyping;

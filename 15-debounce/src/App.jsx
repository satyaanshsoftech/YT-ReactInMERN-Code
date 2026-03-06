import React, { useEffect, useState } from "react";

const App = () => {
  const [word, setWord] = useState("");
  const [debounceWord, setdebounceWord] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setWord(value);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebounceWord(word);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [word]);

  useEffect(() => {
    if (debounceWord) {
      console.log("", debounceWord);
    }
  }, [debounceWord]);

  return (
    <div className="wrapper">
      <input type="text" name="word" value={word} onChange={handleChange} />
    </div>
  );
};

export default App;

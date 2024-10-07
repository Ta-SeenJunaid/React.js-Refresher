import React, { useState } from "react";

const StateTutorial = () => {
  const [inputText, setInputText] = useState("Hello!!!!");

  const onChangeInput = (event) => {
    const newInputValue = event.target.value;
    setInputText(newInputValue);
  };

  return (
    <div>
      <input placeholder="Write here ..." onChange={onChangeInput}></input>
      {inputText}
    </div>
  );
};

export default StateTutorial;

import React, { useState } from "react";

const Counter = () => {
  const [txValue, setTextValue] = useState("");

  const onchange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="이름"
        type="text"
        value={txValue}
        onChange={onchange}
      />

      <br />
      <p>{txValue}</p>
    </div>
  );
};

export default Counter;

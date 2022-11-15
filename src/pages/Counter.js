import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);
  //첫번째인자 최초값 (0으로설정됨), 앞에 변수를 셋팅하는 함수

  const increase = () => {
    setNumber(num + 1);
  };

  const decrease = () => {
    setNumber(num - 1);
  };
  return (
    <div>
      <button onClick={increase}>1</button>
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
      {/* 동적으로 변경하는 값 = state라고 하고 
      state를 관리하기위한 함수 =use state */}
    </div>
  );
};

export default Counter;

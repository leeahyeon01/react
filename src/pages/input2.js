import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    //객체 생성
    name: "",
    email: "",
    tel: "",
  });
  const { name, email, tel } = inputs; //객체의 내용물을 빼주는것 (es6새로추가된기능) 빼줌으로서 Input2.name이라고 안쓰고 named이라쓰면된다

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // inputs[id]=value 얕은복사 이므로 아래와 같이 깊은 복사를 해줘야함
    setInputs({
      ...inputs, //새로 복사해서(깊은복사) 만들어줌 아래 세줄과 같음 (es6새로추가된기능)
      //    name:"",
      //    email:"",
      //    tel:""
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input id="name" type="text" value={name} onChange={onChange} />
      </div>

      <div>
        <label>이메일</label>
        <input id="email" type="text" value={email} onChange={onChange} />
      </div>

      <div>
        <label>전화번호</label>
        <input id="tel" type="text" value={tel} onChange={onChange} />
      </div>
      <p>name:{name}</p>
      <p>email:{email}</p>
      <p>tel:{tel}</p>
    </div>
  );
};

export default Input2;

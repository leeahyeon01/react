import { Routes, Route, Link, Form } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Counter from "./pages/Counter";
import Input from "./pages/input";
import Input2 from "./pages/input2";
import UserList from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home|</Link> {/* === <a href="/"></a> */}
        <Link to="/about">About|</Link>
        <Link to="/counter">counter|</Link>
        <Link to="/input">Input|</Link>
        <Link to="/input2">Input2|</Link>
        <Link to="/List">UserList|</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* 파일 연결*/}
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/input2" element={<Input2 />}></Route>
        <Route path="/List" element={<UserList />}></Route>
      </Routes>
      {/* 메뉴클릭시 전환되는곳 */}
    </div>
  );
}

export default App;

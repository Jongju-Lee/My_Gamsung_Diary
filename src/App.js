import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import New from "./component/New";
import Edit from "./component/Edit";
import Diary from "./component/Diary";

//  COMPONENTS
import MyButton from "./ui/MyButton";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import { Routes, Navigate } from "react-router-dom";
import { Route } from "react-router";
import Main from "./Component/Main";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;

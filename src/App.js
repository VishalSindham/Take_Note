import { Routes, Route } from "react-router-dom"

import MockAPI from "./MockAPI"

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to Take Note.</h1>} />
      <Route path="/api" element={<MockAPI/>} />
    </Routes>
  );
}

export default App;

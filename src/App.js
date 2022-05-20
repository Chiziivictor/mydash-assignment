import Register from "./components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

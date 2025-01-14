
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin/:coinId" element={<Coin />}/>
      </Routes>
    </div>
  );
};

export default App;

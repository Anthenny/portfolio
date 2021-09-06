import "./app.scss";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import OverMij from "./components/overMij/OverMij";
import Projecten from "./components/projecten/Projecten";
import MobileNav from "./components/navbar/MobileNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      {isOpen && <MobileNav isOpen={isOpen} toggle={toggle} />}
      {!isOpen && <Navbar toggle={toggle} />}
      <div className="body">
        {!isOpen && <Home />}
        {!isOpen && <OverMij />}
        {!isOpen && <Projecten />}
      </div>
    </div>
  );
}

export default App;

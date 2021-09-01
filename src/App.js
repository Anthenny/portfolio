import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import OverMij from "./components/overMij/OverMij";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OverMij />
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import IndividualBrewery from "./pages/IndividualBrewery";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/individual/:id" element={<IndividualBrewery />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import DetailedView from "./views/DetailedView";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/find-doctor" element={<DetailedView />} />
    </Routes>
  </>
);

export default App;

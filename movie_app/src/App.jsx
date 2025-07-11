import "./css/App.css";
import { MovieProvider } from "./pages/context/MovieContext";
import NavBar from "./Components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <MovieProvider>
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;

import './App.css';
import {Routes, Route, useLocation} from "react-router-dom"
import LandingPage from './components/LandinPage/landingPage';
import Home from './components/Home/Home';
import VideogameDetail from './components/DetailsVideogames/detailsVideogame';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';
import NavBar from './components/NavigationBar/NavBar';
import About from './components/About/about';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/> }
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/videogames/:id" element={<VideogameDetail />} />
      <Route path="/videogames/create" element={<CreateVideogame />} />
      <Route path="/about" element = {<About/>}></Route>
    </Routes>
    </div>
  );
}


export default App;

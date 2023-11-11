import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameScreen from "./GameScreen.js"
import Home from "./Home.js"
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <div>   
          <Link to="/">Home</Link>
          <Link to="/GameScreen">Game</Link>
        </div>   
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/GameScreen" element={<GameScreen/>} />
        </Routes>
    </div>
  );
}

export default App;

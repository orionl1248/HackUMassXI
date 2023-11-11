import { apiFetch } from "./scripts/FetchApi"
import { randomElement } from "./scripts/util"
import getPeople from "./scripts/RateMyProfessor"
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import "./GameScreen.css"
import Professor from "./Professor"
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Header from "./Header"
import IconButton from '@mui/material/IconButton';

export default function GameScreen() {
  let [professorBase, setProfessorBase] = useState({});
  let [isSubmitted, setSubmitted] = useState(false);
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [left, setLeft] = useState({});
  let [right, setRight] = useState({});

  useEffect(() => {
    if (isSubmitted) {
      console.log(left);
      console.log(right);
    }
  }, [isSubmitted]);

  useEffect(() => {
    (async () => {
      console.log("professorBase", professorBase);
      setRight(await randomElement(professorBase));
      setLeft(await randomElement(professorBase));
    })();
  }, [professorBase])

  useEffect(() => {
    (async () => {
      setProfessorBase(await getPeople());
    })();
  }, []);

  return <>
    <Header />
    <div className="GameFullPanel">
      <div className="Bar">
        <div className="TextBox">
          <h2>Score: {score}</h2>
        </div>
      </div>
      <div className="HoldsTwoPanels">
        <div className="HalfPanel RightPanel">
          <Professor info={left}/>
        </div>
        <div className="HalfPanel LeftPanel">
          <Button 
            onClick={()=>{setSubmitted(true)}}
            type="submit"
            variant="contained"
            className="HigherLowerButton"
          >Higher</Button>
          <Professor info={right}/>
          <Button 
            onClick={()=>{setSubmitted(true)}}
            type="submit"
            variant="contained"
            className="HigherLowerButton"
          >Lower</Button>
        </div>
      </div>
      <div className="Bar">
        <div className="RestartBox" onClick={()=>{window.parent.location = window.parent.location.href}}>
          <IconButton 
            color="primary"
            variant="contained"
          >
            <RestartAltIcon sx={{fontSize: "3rem"}}/>
          </IconButton>
        </div>
        <div className="TextBox">
          <h2>High Score: {highScore}</h2>
        </div>
      </div>
    </div>
  </>
}

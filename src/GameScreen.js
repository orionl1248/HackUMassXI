import { testFetch } from "./scripts/rateMyProfessor"
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import "./GameScreen.css"

export default function GameScreen() {
  let [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      console.log(testFetch());
    }
  }, [isSubmitted])  
  return <>
    <div>
      <h1 id="gameScreenHeader">Game Screen</h1>
    </div>
    <Button 
      onClick={()=>{setSubmitted(true)}}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >Lower</Button>
    <p>Game Screen</p>
  </>
}

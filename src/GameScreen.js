import { testFetch } from "./scripts/rateMyProfessor"
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';

export default function GameScreen() {
  let [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      console.log(testFetch());
    }
  }, [isSubmitted])  
  return <>
    <Button 
      onClick={()=>{setSubmitted(true)}}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >button text</Button>
    <p>Game Screen</p>
  </>
}

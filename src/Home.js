import "./home.css"
import {Link} from 'react-router-dom'

const Home = () => {
  return <div><h1><center><span id = "UMASS"> UMASS </span>Rate My Professor</center></h1>
  <h1>Higher or Lower Game</h1>

  <button><Link to="/GameScreen"> Start Game</Link></button>
  <img id = "UMass" src = "./university-of-massachusetts.png" alt = "UMass Logo"></img>
  <img id = "UMass2" src = "./university-of-massachusetts.png" alt = "UMass Logo"></img>

  <h1>Instructions!</h1>
  <center><ol>
    <li class = "left"> <strong><em> Each round, the names of two professors will appear.</em> </strong></li>
    <li class = "left"><strong><em> You have to guess which professor's rating from the popular site Rate My Professor is higher or lower.</em></strong></li>
    <li class = "left"><strong><em> The game continues until you guess wrong. Good luck!</em></strong></li>
  </ol></center>
  
</div>
}

export default Home;

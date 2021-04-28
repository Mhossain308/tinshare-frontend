import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import ItineraryContainer from './page/ItineraryContainer'


function App() {
  const [itineraries, setItineraries] = useState ([])

  useEffect (() => {
fetch ('http://localhost:4000/itineraries')
.then(resp =>resp.json())
.then(itineraries => {
  console.log(itineraries)
  setItineraries(itineraries)
})
  
  
  
  },[] )

  
  
  
  
  
  
  
  
  return (
    <div className="App">
     <ItineraryContainer itineraries={itineraries} />
    </div>
  );
}

export default App;

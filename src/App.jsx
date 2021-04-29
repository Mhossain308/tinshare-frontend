import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import ItineraryContainer from './page/ItineraryContainer'
import Addform from './page/Addform';


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

function handleForm(newItin) {
  const updatedItineraryArray = [newItin, ...itineraries]
  setItineraries(updatedItineraryArray)

}

  
  
  
  
  
  
  
  
  return (
    <div className="App">
     <ItineraryContainer itineraries={itineraries} />
     <Addform addItin={handleForm} />
    </div>
  );
}

export default App;

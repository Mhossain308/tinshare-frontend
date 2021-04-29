import './App.css';
import {useState, useEffect} from 'react'
import ItineraryContainer from './page/ItineraryContainer'
import Addform from './page/Addform';
import {Switch, Route} from 'react-router-dom'
import Updateform from './components/UpdateForm';


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

function handleUpdatedItinerary(updatedNewItinerary) {
  const updatedItinerary = itineraries.map(itinerary => {
      if (itinerary.id === updatedNewItinerary.id ) return updatedNewItinerary
      
      return itinerary
  })
  setItineraries(updatedItinerary)

}
  
  
  return (
    <div className="App">
      <Switch>
          <Route exact path= "/show"> 
            <ItineraryContainer itineraries={itineraries} onUpdatedItinerary={handleUpdatedItinerary} />
          </Route>
       
          <Route exact path= "/update"> 
            <Updateform onUpdatedItinerary={handleUpdatedItinerary} />
          </Route>
        
         <Route exact path= "/new">
            <Addform addItin={handleForm} />
          </Route>
     </Switch>
    </div>
  );
}

export default App;

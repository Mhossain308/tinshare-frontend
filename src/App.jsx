import './App.css';
import { useState, useEffect } from 'react'
import ItineraryContainer from './page/ItineraryContainer'
import Addform from './page/Addform';
import { Switch, Route } from 'react-router-dom'
import Updateform from './components/UpdateForm';
import NavBar from './components/NavBar';
import Homepage from './page/Homepage';
import Details from './page/Details';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  const [itineraries, setItineraries] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/itineraries')
      .then(resp => resp.json())
      .then(itineraries => {
        console.log(itineraries)
        setItineraries(itineraries)
      })

  }, [])

  function handleForm(newItin) {
    const updatedItineraryArray = [...itineraries, newItin]
    setItineraries(updatedItineraryArray)
  }

  function handleUpdatedItinerary(updatedNewItinerary) {
    const updatedItinerary = itineraries.map(itinerary => {
      if (itinerary.id === updatedNewItinerary.id) return updatedNewItinerary

      return itinerary
    })
    setItineraries(updatedItinerary)

  }

  const handleDeleteItinerary = (ItineraryToDelete) => {
    const updatedItinerary = itineraries.filter((itinerary) => itinerary.id !== ItineraryToDelete.id);
    setItineraries(updatedItinerary);
  }


  return (

    <ChakraProvider>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/home">
            <Homepage />
          </Route>

          <Route exact path="/show">
            <ItineraryContainer itineraries={itineraries} onUpdatedItinerary={handleUpdatedItinerary} onDelete={handleDeleteItinerary} />
          </Route>

          <Route exact path="/update">
            <Updateform onUpdatedItinerary={handleUpdatedItinerary} />
          </Route>

          <Route exact path="/new">
            <Addform addItin={handleForm} />
          </Route>
          <Route exact path="/itineraries/:id">
          <Details itineraries={itineraries} />
        </Route>
        </Switch>
      </div>
    </ChakraProvider>

  );
}

export default App;

import React from 'react' 
import Itineraryitem from '../components/ItineraryItem'
import './ItineraryContainer.css'



function ItineraryContainer({itineraries, onUpdatedItinerary, onDelete}) {
    const allItins = itineraries.map((itinerary) => {
        return(
            <Itineraryitem
            key={itinerary.id}
            itinerary={itinerary}
            onUpdatedItinerary={onUpdatedItinerary}
            onDelete={onDelete}
            />

        )
    })
return(
        <div>
           
           <div className="cards"> {allItins} </div>
                    
        </div>
)
}


export default ItineraryContainer
import React from 'react' 
import Itineraryitem from '../components/ItineraryItem'

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
        <>
            <ul className="cards">{allItins}</ul>
                    
        </>
)
}


export default ItineraryContainer
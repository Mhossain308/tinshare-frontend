import React from 'react' 
import Itineraryitem from '../components/ItineraryItem'

function ItineraryContainer({itineraries}){
    const allItins = itineraries.map((itinerary) => {
        return(
            <Itineraryitem
            key={itinerary.id}
            itinerary={itinerary}

            
            />

        )
    })
return(
        <>
            <h1>ItineraryContainer</h1>
                    {allItins}
        </>
)
}


export default ItineraryContainer
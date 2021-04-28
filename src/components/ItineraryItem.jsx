import React from 'react'

function ItineraryItem({itinerary}) {
    console.log(itinerary)
    
    
    
    
    
    return(
        <div>
            <img src={itinerary.location.image}/>
            <p>{itinerary.location.country}</p>
            <p>{itinerary.description}</p>
            <p>{itinerary.comment}</p>
            <p>{itinerary.likes}</p>

        </div>

    )

}


export default ItineraryItem
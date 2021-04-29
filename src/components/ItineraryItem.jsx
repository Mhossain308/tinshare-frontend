import React from 'react'
import Updateform from './UpdateForm'
import './ItineraryItem.css'



function ItineraryItem({itinerary, handleUpdatedItinerary}) {
    console.log(itinerary)
    
return(
    <main className="grid">
        <article>
        
             <img src={itinerary.location.image} alt={itinerary.location.country}/> 
                <div className="text">
                    <p>{itinerary.country}</p>
                    <p>{itinerary.description}</p>
                    <p>{itinerary.comment}</p>
                    <p>{itinerary.likes}</p>
                    <Updateform itinerary={itinerary} handleUpdatedItinerary={handleUpdatedItinerary} />
                    <button> Delete </button>
                </div>
         </article>
    </main>
            
         

    )

}


export default ItineraryItem
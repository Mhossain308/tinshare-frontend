import React from 'react'
import Updateform from './UpdateForm'
import './ItineraryItem.css'



function ItineraryItem({itinerary, onUpdatedItinerary, onDelete}) {
    console.log(itinerary)
    
    
    const handleDelete = () => {
        fetch(`http://localhost:4000/itineraries/${itinerary.id}`, {
          method: "DELETE",
        })
            onDelete(itinerary);
          };
    
    
    return(
    <main className="grid">
        <article>
        
             <img src={itinerary.location.image} alt={itinerary.location.country}/> 
                <div className="text">
                    <p>{itinerary.country}</p>
                    <p>{itinerary.description}</p>
                    <p>{itinerary.comment}</p>
                    <p>{itinerary.likes}</p>
                    <Updateform itinerary={itinerary} onUpdatedItinerary={onUpdatedItinerary}/>
                    <button style= {{color:"rgb(13, 93, 162)"}} onClick={handleDelete}> Delete </button>
                </div>
         </article>
    </main>
            
         

    )

}


export default ItineraryItem
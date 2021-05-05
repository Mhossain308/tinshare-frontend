import React from 'react'
import Updateform from './UpdateForm'
import './ItineraryItem.css'
import {useState} from 'react'
import { Button,} from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

function ItineraryItem({itinerary, onUpdatedItinerary, onDelete}) {
    const [show, setShow] = useState(false)
    const [likes, setLikes] = useState(itinerary.likes);


    function handleLikes() {
        setLikes(likes + 1);
        console.log(itinerary.likes)
       

    
       
        fetch(`http://localhost:4000/itineraries/${itinerary.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: likes + 1,
                user_id: 1
            })
        })
            .then(r => r.json())
            
    }
    
    
    const handleDelete = () => {
        fetch(`http://localhost:4000/itineraries/${itinerary.id}`, {
          method: "DELETE",
        })
            onDelete(itinerary);
          };
    
    
    return(
    <Box w="300px" border="4px" borderColor="blue.200">
        <main className="grid">
        <article>
        
             <Image boxSize="300px" src={itinerary.location.image} alt={itinerary.location.country}/> 
                <div className="text">
                    <p>{itinerary.location.country}</p>
                    <p>{itinerary.description}</p>
                    <p>{itinerary.comment}</p>
                    {/* <p>{itinerary.likes}</p> */}
                    
                    {show?<Updateform itinerary={itinerary} onUpdatedItinerary={onUpdatedItinerary}/>: null}
                    <Stack direction="row" spacing={10}>
                    <Button colorScheme="teal" size="sm" onClick={() => setShow(!show)}> Edit Itinerary </Button>
                    <Button onClick={handleLikes}> ❤️ {likes} </Button>
                    <Button colorScheme="teal" size="sm" onClick={handleDelete}> Delete </Button>
                    </Stack>
                </div>
         </article>
        </main>
    </Box>
            
         

    )

}


export default ItineraryItem
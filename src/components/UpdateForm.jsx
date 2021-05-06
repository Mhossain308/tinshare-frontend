import React, { useState } from 'react'
import { Input } from "@chakra-ui/react"
import { Button} from "@chakra-ui/react"



function Updateform({itinerary, onUpdatedItinerary, onDelete}) {
const [editDescription, setEditDescription] = useState("")
const [editComment, setEditComment] = useState("")
console.log(itinerary)
    // function handleDescriptionChange(event) {
    //     setEditDescription(event.target.value)
    // }
    function handleCommentChange(event) {
        setEditComment(event.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:4000/itineraries/${itinerary.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: editDescription,
                comment: editComment,
                user_id: 1
            })
        })
            .then(r => r.json())
            .then((newItinerary) => {
            console.log(onUpdatedItinerary) 
            onUpdatedItinerary(newItinerary)
        })
            setEditDescription('')
            setEditComment('')
    }

  return (
        <form onSubmit={handleSubmit}>
                {/* <Input variant="outline" onChange={handleDescriptionChange} value={editDescription} /> */}
                <Input variant="outline" onChange={handleCommentChange} value={editComment}/>
                <Button colorScheme="teal" size="sm" type="submit">Submit!</Button>
               
        </form>
    )
}
export default Updateform
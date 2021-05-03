import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function Updateform({itinerary, onUpdatedItinerary, onDelete}) {
const [editDescription, setEditDescription] = useState("")
// const [editComment, setEditComment] = useState("comment")
console.log(itinerary)
    function handleDescriptionChange(event) {
        setEditDescription(event.target.value)
    }
    // function handleCommentChange(event) {
    //     setEditComment(event.target.value)
    // }
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:4000/itineraries/${itinerary.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: editDescription,
                // comment: editComment,
                user_id: 1
            })
        })
            .then(r => r.json())
            .then((newItinerary) => {
            console.log(onUpdatedItinerary) 
            onUpdatedItinerary(newItinerary)
        })
            setEditDescription('')
            // setEditComment('')
    }

  
    
    
    return (
        <form onSubmit={handleSubmit}>
                <input onChange={handleDescriptionChange} value={editDescription} />
                {/* <input onChange={handleCommentChange} value={editComment}/> */}
                <button style= {{color:"rgb(13, 93, 162)"}} type="submit">Edit Itinerary</button>
               
        </form>
    )
}
export default Updateform
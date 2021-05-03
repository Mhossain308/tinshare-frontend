import React, { useState } from 'react'
import {Link} from 'react-router-dom'


function Addform( { addItin }) {
    const [description, setDescription] = useState("")
    const [comment, setComment] = useState("")
    const [like, setLike] = useState("")
    const [country, setCountry] = useState("")
    const [image, setImage] = useState("")
    
    
    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:4000/itineraries", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: description,
                comment: comment,
                like: parseInt(like),
                location: 
                    {
                        country:country,
                        image:image
                    },
                user_id: 1,
            })
        })
            .then(response => response.json())
            .then((newItin) => addItin(newItin))
            setDescription('')
            setComment('')
            setLike('')
            setCountry('')
            setImage('')
            
    }

return (
    <div className="new-plant-form">
      <h2>New Itinerary</h2>
      <form onSubmit={handleSubmit} className="new-itinerary-form">
        <input placeholder="Country Name" value={country} onChange={(event) => setCountry(event.target.value)} />
        <input placeholder="Image URL"   value={image} onChange={(event) => setImage(event.target.value)} />
        <input placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
        {/* <input placeholder="likes" value={like} onChange={(event) => setLike(event.target.value)} /> */}
        {/* <input placeholder="comment" value={comment} onChange={(event) => setComment(event.target.value)} /> */}
        <Link to="/show">
        <button type="submit">Add Itinerary</button>
        </Link>
      </form>
    </div>
  );
}

export default Addform;
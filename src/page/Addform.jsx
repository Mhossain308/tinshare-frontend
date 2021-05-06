import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"

function Addform({ addItin }) {
  const history = useHistory()
  const [description, setDescription] = useState("")
  const [comment, setComment] = useState("")
  const [like, setLike] = useState("")
  const [country, setCountry] = useState("")
  const [image, setImage] = useState("")


  function handleSubmit(event) {
    console.log("working")
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
          country: country,
          image: image
        },
        user_id: 1,
      })
    })
      .then(response => response.json())
      .then((newItin) => { addItin(newItin); history.push("/show") })
    setDescription('')
    setComment('')
    setLike('')
    setCountry('')
    setImage('')

  }

  return (
    <div className="new-form">
      <h2>New Itinerary</h2>
      <form onSubmit={handleSubmit} className="new-itinerary-form">
        <Flex align="center" justify="center">
          <Stack spacing={8} width="300px">
            <Input variant="outline" width="300px" placeholder="Country Name" value={country} onChange={(event) => setCountry(event.target.value)} />
            <Input variant="outline" width="300px" placeholder="Image URL" value={image} onChange={(event) => setImage(event.target.value)} />
            <Input variant="outline" width="300px" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
            {/* <input placeholder="likes" value={like} onChange={(event) => setLike(event.target.value)} /> */}
            {/* <input placeholder="comment" value={comment} onChange={(event) => setComment(event.target.value)} /> */}

            <Button colorScheme="teal" size="sm" type="submit">Add Itinerary</Button>
          </Stack>
        </Flex>
      </form>
    </div>
  );
}

export default Addform;
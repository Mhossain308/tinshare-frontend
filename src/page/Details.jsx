import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
function Details() {
    const [itinerary, setItinerary] = useState({ country: "", description: "", image: "", location: "", })
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/itineraries/${id}`)
            .then(r => r.json())
            .then(product => {
                console.log(product)
                setItinerary(product)
            })

    }, [])





    return (
        <div>

                <h1> {itinerary.location.country} </h1>
                <Flex align="right" justify="right">
            <Spacer />
                <p>{itinerary.description}</p>
                </Flex>
            <Box w="650px" border="4px" borderColor="blue.200">
                <img src={itinerary.location.image} />
            </Box>


        </div>
    )

}
export default Details
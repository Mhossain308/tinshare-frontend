import React from 'react'
import Itineraryitem from '../components/ItineraryItem'
import './ItineraryContainer.css'
import { Box, Button, Flex, useColorMode, Spacer } from "@chakra-ui/react";



function ItineraryContainer({ itineraries, onUpdatedItinerary, onDelete }) {
    const { colorMode, toggleColorMode } = useColorMode()
    const allItins = itineraries.map((itinerary) => {
        return (
            <Itineraryitem
                key={itinerary.id}
                itinerary={itinerary}
                onUpdatedItinerary={onUpdatedItinerary}
                onDelete={onDelete}
            />

        )
    })
    return (
        <div>
           

            <Flex align="right" justify="right">
            <Spacer />
                <Button size="sm" onClick={() => toggleColorMode(colorMode)}>
                    Theme
        </Button>
            </Flex>

            <div className="cards"> {allItins} </div>

        </div>
    )
}


export default ItineraryContainer
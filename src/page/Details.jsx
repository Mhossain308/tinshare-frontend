import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
// import {Image} from '@chakra-ui/react'
import {Text} from '@chakra-ui/react'
import './Details.css'




function Details() {
    
    const [details, setDetails] = useState({ country: "", description: "", image: "", location: "" })
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/itineraries/${id}`)
            .then(r => r.json())
            .then(product => {
                console.log(product)
                setDetails(product)
            })

    }, [])

   




return (
        <div>

                <Text fontSize="7xl"> {details.location.country} </Text>
                {/* <Box position="center"   w="650px" border="4px" borderColor="blue.200"> */}
                <div className="img">
                <img position="center" src={details.location.image} />
                </div>
            {/* </Box> */}
                <Flex align="center" justify="center">
            {/* <Spacer /> */}
           
            {/* <Box position="center" align="right" w="650px" h="435px"  border="4px" borderColor="blue.200"> */}
                <Text className="text" fontSize="24px" align="center"> {details.description} </Text>
                {/* </Box> */}
                </Flex>
            


        </div>

        
    )

}
export default Details
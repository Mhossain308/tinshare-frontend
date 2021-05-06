import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { Flex,  } from "@chakra-ui/react"


function NavBar() {

  return (
    <div>
      <Flex align="right" justify="right">
      <Stack direction="row" spacing={10}>
        <Button>
          <Link to="/home"> Home  </Link>
        </Button>
       
        <Button>
          <Link to="/show"> Your Itineraries  </Link>
        </Button>

        <Button>
          <Link to="/new"> Add New Itinerary  </Link>
        </Button>
      </Stack>
      </Flex>

    </div>
  )

}
export default NavBar
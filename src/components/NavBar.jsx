import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
   
return ( 
        <div>
          <Link to="/"> Home  </Link>
          <Link to="/show"> Your Itineraries  </Link>
          <Link to="/new"> Add New Itinerary  </Link>
            
        </div>
    )

}
export default NavBar
import React from 'react'
import {Image} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import './Homepage.css'




function Homepage () {



    return (
       <div className="container">

        <img src="https://www.wallpapertip.com/wmimgs/9-90685_travel-background-hd.jpg" />
        <div className="centered"> TinShare </div>
        <button className="btn">
            

            <Link to="/show"> Get Inspired </Link>
        </button>
      </div>

        
    )
}






export default Homepage
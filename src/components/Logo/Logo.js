import React from 'react';
import Tilt from 'react-tilty'
import brain from'./brain.png'
import './Logo.css'

const Logo =()=> {
    return(
        <div className='mh3'>
            <Tilt className="Tilt color shadow-5 br2 animate__animated animate__backInLeft animate__delay-2s" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img src={brain} alt="brain logo"/></div>
            </Tilt>
        </div>
    )
}

export default Logo;
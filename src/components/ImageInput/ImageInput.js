import React from 'react';
import './ImageInput.css';

const ImageInput =()=> {
    return(
        <div className='mh5 mv2'>
            <div className='colordiv pv3 ph2 animate__animated animate__backInUp animate__delay-4s'>
                <input type='text' className='pa2  center'/>
                <button className=' pa2 pointer dim grow'>Detect</button>
            </div>
        </div>
    )
}

export default ImageInput;
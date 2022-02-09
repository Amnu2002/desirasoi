import React from 'react'
import {Link} from 'react-router-dom'
import './Foodtimecards.css'
export default function FoodtimeCards(props) {
    const abc=()=>{
        props.timeSet(props.time)
    }
    return (
        
            <div className='cardmain1' onClick={abc} >
                    <Link to="/food">
                        <div className='cardimage'>
                        <img src={props.imageUrl} className='cardimage1' alt='This is an img'/>
                        </div>
                    </Link>
                    <div className='cardtext'>
                        <h2>{props.time}</h2>
                    </div>
            </div>
        
    )
}
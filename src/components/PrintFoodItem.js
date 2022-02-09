import React, {useState} from 'react'
import './PrintFoodItem.css'

export default function PrintFoodItem(props) {
    const handleClick=()=>{
        props.togglePopup(true)
        props.getData(props.object)
    }
    
    return (
        <div>
            <div className='cardmain'>
                    <div className='cardimage'>
                        <img src={props.object.recipe.image} alt='This is img' className='cardimage1'/>
                    </div>
                    <div className='cardtext'>
                        <h3>{props.object.recipe.label}</h3>
                    </div>
                    <div className="containerDesc">
                    <div className="cardDesc">
                        <ul>
                            <li><h4 style={{display:'inline'}}>Cuisine Type : </h4> <h5 style={{display:'inline'}}>{props.object.recipe.cuisineType}</h5></li>
                            <li><h4 style={{display:'inline'}}>Calories Count : </h4> <h5 style={{display:'inline'}}>{Math.ceil(props.object.recipe.calories)}</h5></li>
                            <li><h4 style={{display:'inline'}}>Source : </h4> <h5 style={{display:'inline'}}>{props.object.recipe.source}</h5></li>
                        </ul>
                    
                    </div>
                    <div className="readMore" onClick={handleClick}>
                        <h3>Read More</h3>
                    </div>
                    </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Popup.css'

export default function Popup(props) {
    console.log(props.obj);
    const changeclick=()=>{
        document.getElementById('popup').style.display = 'none'
        props.togglePopup(false)
    }
    if(props.seen===true) {
        document.getElementById('popup').style.display = 'block'
    }
    return (
       <div id="popup">
                <button onClick={changeclick} className='cross'>&times;</button>
                <div className='portion1'>
                <div className="foodimage"> <img src={props.obj && props.obj.recipe.image} alt="this is img" /></div>
                <div className="text1">
                    <div className="label"><h1>{props.obj && props.obj.recipe.label}</h1></div>
                    {/* {props.obj && <hr style={{color:'red', height:'7px', length: '50%'}}/>} */}
                    <hr style={{color:'red', height: '7px'}}/>
                    <h3>"{props.obj && props.obj.recipe.mealType}", "{props.obj && props.obj.recipe.dishType}"</h3>
                </div>
                </div>
                <div className="ingredients">
                    <h1 style={{marginLeft: '40px'}}><u>Ingredients</u></h1>
                    {props.obj && props.obj.recipe.ingredientLines.map((element)=>{
                        return <div style={{marginLeft:'40px'}}><li>{element}</li></div>
                    })}
                </div>
                <div className="recipe">
                <h1 style={{marginLeft: '40px'}}><u>Recipe</u></h1>
                <a className='linkOfRecipe' href={props.obj && props.obj.recipe.url} target='_blank' style={{marginLeft:'40px'}}>Click Here</a>
                </div>
                <div className="source">
                    <h2><i>By : <span style={{color:'red'}}>{props.obj && props.obj.recipe.source}</span></i></h2>
                </div>
                
            </div>
    )
}

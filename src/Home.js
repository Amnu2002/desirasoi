import React,{useState} from 'react'
import FoodCards from './components/FoodCards'
import Slider from './components/Slider'

export default function Home(props) {
    const setTim = (tim1)=>{
        props.timeChange(tim1)
    }
    return (
        <div>
            <Slider/>
            <FoodCards settim={setTim}/>
        </div>
    )
}

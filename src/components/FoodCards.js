import React,{useState} from 'react'
import './FoodCard.css';
import FoodtimeCards from './FoodtimeCards';

export default function FoodCards(props) {
    const [time, settime] = useState('sdhds')
    const timeSet=(time1)=>{
        props.settim(time1)
    }
    return (
        <div>
            <div className='foodtimecontainer'>

                <FoodtimeCards time='BreakFast' timeSet={timeSet} imageUrl="https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                <FoodtimeCards  time='Lunch' timeSet={timeSet} imageUrl='https://img2.mashed.com/img/gallery/forgetting-to-eat-during-quarantine-heres-why/why-are-people-forgetting-to-eat-lunch-in-particular-1595441854.jpg'/>
                <FoodtimeCards  time='Dinner' timeSet={timeSet} imageUrl="https://oneunderbanquet.com/wp-content/uploads/2014/11/thanksgiving-day-brunch-dinner-livonia.jpg"/>
            </div>
        </div>
    )
}
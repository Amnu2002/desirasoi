import React, { useState, useEffect, useRef } from 'react'
import PrintFoodItem from './PrintFoodItem'
import './CardCaller.css'
import './Indian.css'
import Popup from './Popup'
import Spinner from './Spinner'

export default function Sweet(props) {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true)
    const [food, setfood] = useState('sweet course')
    const searchName = useRef(null)
    const Apifetch = async () => {
            const apiurl = `https://api.edamam.com/search?q=${food}&app_id=f5421d68&app_key=d38aec9d400ec6fa6552a55690d8de81&dishType=dessert`;
            const data = await fetch(apiurl);
            const parsedData = await data.json()
            setarticles(parsedData.hits);
            setloading(false)
        }
    useEffect(() => {
        

        Apifetch()

    }, [])

   
        const handleClick = async(e)=>{
            e.preventDefault()
            const apiurl = `https://api.edamam.com/search?q=${searchName.current.value}&app_id=f5421d68&app_key=d38aec9d400ec6fa6552a55690d8de81&dishType=dessert`;
            setloading(true)
            const data = await fetch(apiurl);
            const parsedData = await data.json()
            setarticles(parsedData.hits);
            setloading(false)
        }

        const [seen, setseen] = useState(false)
const [obj, setobj] = useState(null)
const togglePopup = (value)=>{
        setseen(value)
    }

    const getData=(value)=>{
        setobj(value)
    }



    return (
        <>
<Popup togglePopup={togglePopup} seen={seen} obj={obj}/>
        <div className='searchbar'>
        <form className="d-flex">
        <input ref={searchName} className="form-control me-2" type="search" placeholder="Search Food" aria-label="Search"/>
        <button className="btn btn-dark" type="submit" onClick={handleClick}>Search</button>
        </form>
        </div>
        {loading && <Spinner/>}
       {!loading && <div className='cardStyle'>
            
            {articles.map((element)=>{
            return <div key={element.recipe.url}><PrintFoodItem object={element} togglePopup={togglePopup} getData={getData}/></div>
        })}
        </div>}</>
    )
}

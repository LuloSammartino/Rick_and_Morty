import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import style from './Detail.module.css'
const API_KEY = "pi-lulosammartino"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Detail() {

const [character, setCharacter] = useState({})


let {id} = useParams()


useEffect(() => {
   axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
   .then((data) =>  setCharacter(data.data))
   
   
 }, [id]);


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return   ( 
    <div className={style.contenedor}>
         <div className={style.text}>
            <h1>{character.name}</h1>
         <h2>Status: {character.status}</h2>
         <h2>Species: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
         <h2>Origin: {character.origin?.name}</h2>
         </div>
         
         <img className={style.img} src={character.image} alt='imagen de x pj'></img>
           
    </div> 
    )
}
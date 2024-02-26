import style from "./Card.module.css"
import { Link } from "react-router-dom";
import usefavouritesState from "../../zustand/favouritesState";
import { useEffect, useState } from "react";
import useCharacterState from "../../zustand/charactersState";

export default function Card({ id , name, gender, status, species, origin, image}) {

const [isFav, setIsFav] = useState(false)

const character = { id , name, gender, status, species, origin, image}
const removeCharacter = useCharacterState((state) => (state.removeCharacter))
const favoritos = usefavouritesState((state) => (state.favourites))
const addFav = usefavouritesState((state) => (state.addFav))
const removeFav = usefavouritesState((state) => (state.removeFav))

useEffect( () => {
   for(let i =0; i < favoritos.length; i++){
      if(favoritos[i].id == id){
         setIsFav(true)
      } 
   }
},[]) 
   

const handleFavorite = () => {
   if(!isFav){
      setIsFav(true);
      addFav(character)
   
   }else {
   setIsFav(false)
   removeFav(id)
   }
   
}


const onClose = (id) => { // cierra la card de x personaje
   removeFav(id)
   removeCharacter(id)
}

   return (
      <div className={style.card} >
         <div className={style.contenedorx}>

            {
   isFav ? (
      <button onClick={() => handleFavorite()}>❤️</button>
   ) : (
      <button onClick={() => handleFavorite()}>🤍</button>
   )
}
            <button className={style.delete} onClick={() => onClose(id)}><svg  xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button>
          </div>
         
         <h2 >{name}</h2>
       <Link to={`/detail/${id}`} >
         <img className={style.img} src={image} alt='' /> 
      </Link> 
         

         <h2 >Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2 >Gender: {gender}</h2>
         <h2 >Origin: {origin?.name}</h2>
      </div>
   );
}

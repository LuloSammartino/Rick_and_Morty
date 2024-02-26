import style from "./SearchBar.module.css"
import useCharacterState from "../../zustand/charactersState"
import { useState } from "react"
import axios from "axios"

export default function SearchBar() {

const [idEstado, setId] = useState("")  
const characters = useCharacterState((state) => (state.characters))
const addCharacter = useCharacterState((state) => (state.addCharacter))

const agregarPersonaje =  () => {
   
     axios(`http://localhost:3001/rickandmorty/character/${idEstado}`)
        .then((data) => 
         data.name ? addCharacter(data) : window.alert(`No hay pj con id ${idEstado}`))
        
   }

   const onSearch = () => { // verifica si el personaje ya se encuentra en la lista
      
      if(!idEstado) window.alert('Por favor, introduzca un id') 
         else {
            let repetido = false
            for(let i = 0; i < characters.length; i++){
             if(characters[i].id == idEstado) repetido = true
            }
            !repetido ? agregarPersonaje() : window.alert('El personaje ya se encuentra en la lista')}
   }

   const handleChange = (e) => { // cambia el estado por el valor del input
      setId(e.target.value)
    
      
   }

   return (
      <div>
         <input type='text'placeholder="Type id here..." className={style.input} onChange={(e) => handleChange(e)}/>
         <button className={style.button} onClick={() => onSearch()}>Agregar</button> 
      </div>
   );
}

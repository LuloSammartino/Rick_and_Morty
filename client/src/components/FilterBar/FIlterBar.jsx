import style from './FilterBar.module.css'
import useCharacterState from "../../zustand/charactersState"

export default function FitlerBar()  {
const characters = useCharacterState((state) => (state.characters))
const addCharacter = useCharacterState((state) => (state.addCharacter))  
const filterByName = useCharacterState((state) => (state.filterByName))
const filterById = useCharacterState((state) => (state.filterById))
const filterByGender = useCharacterState((state) => (state.filterByGender))  
const filterByOrigin = useCharacterState((state) => (state.filterByOrigin))
const filterByStatus = useCharacterState((state) => (state.filterByStatus))
const filterBySpecies = useCharacterState((state) => (state.filterBySpecies))

const handleChange = (e) => {
    switch(e.target.value){
        case 'Nombre':filterByName();
                break;
        case 'Gender': filterByGender()       
                break;
        case 'Id' : filterById()
                break;
        case 'Origin' : filterByOrigin()
                break;
        case 'Status' : filterByStatus()
                break;
        case 'Species': filterBySpecies()
    }
}



    return (<div className={style.contenedor}>
        
        <label htmlFor="filtrado">Filtrar por: </label>

  <select name="filtrado" onChange={(e) => handleChange(e)}>
  <option></option>  
  <option>Nombre</option>
  <option>Id</option>
  <option>Gender</option>
  <option>Origin</option>
  <option>Status</option>
  <option>Species</option>
</select>
    </div>) 
}
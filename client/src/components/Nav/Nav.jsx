import SearchBar from "../SearchBar/SearchBar.jsx"
import { Link } from "react-router-dom"
import axios from 'axios'
import style from "./Nav.module.css"
import FilterBar from '../FilterBar/FIlterBar.jsx'
import useCharacterState from "../../zustand/charactersState.js"
const API_KEY= 'pi-lulosammartino'

export default function Nav({logOut}) {

const removeAll = useCharacterState((state) => (state.removeAll))
const addCharacter = useCharacterState((state) => (state.addCharacter))


const getRandom = () => {
  let random = Math.floor(Math.random() * 826)
    axios(`https://rym2.up.railway.app/api/character/${random}?key=${API_KEY}`)
    .then(({data}) => addCharacter(data))
}


    return <div className={style.contenedor}>
        <button className={style.rutas}><Link to='/about'><span className={style.span}>About</span></Link></button>
        <button className={style.rutas}><Link to='/home'><span className={style.span}>Home</span></Link></button>
        <button className={style.rutas}><Link to='/favourites'><span className={style.span}>Favourites</span></Link></button>
        <SearchBar  ></SearchBar>
        <button className={style.button} onClick={() => getRandom()}> Random </button>
        <button className={style.button} onClick={() =>removeAll()}>Clear all</button>
        <FilterBar ></FilterBar>
      <div className={style.contenedorlogout}>
       <button className={style.logout} onClick={() => logOut()}>
      <div className={style.sign}>
        <svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
      <div className={style.text}>Logout</div>
      </button> 
      </div>
      
    </div>
}
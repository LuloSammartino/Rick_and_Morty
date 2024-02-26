import usefavouritesState from '../../zustand/favouritesState'
import Card from '../Card/Card'
import style from './MyFavourites.module.css'

export default function MyFavourites() {

const favourites = usefavouritesState((state) => (state.favourites))

  return <div className={style.cards}>
         
           {favourites.map((character) => <Card 
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            ></Card>)}
        
  </div>  
}

import Card from '../Card/Card';
import style from "./Cards.module.css"
import useCharacterState from '../../zustand/charactersState';
import { useEffect, useState } from 'react';


export default function Cards() {

const characters = useCharacterState((state) => (state.characters))





return <div className={style.cards}>
      {characters.map(character => 
      <Card id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}></Card>)
            }
        
   </div>;
}  

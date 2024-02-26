import {create} from 'zustand'

 const  usefavouritesState = create((set) => ({
    favourites: [],
    addFav: (payload) => set((state) => ([state.favourites.push(payload)])),
    removeFav: (payload) => set((state) => [state.favourites = state.favourites.filter((char) => char.id !== Number(payload))]
    
)}))

export default usefavouritesState
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    myFavourites: 'hola'
}


export const  myFavouritesSlice  = createSlice({
    name: 'myFavourites',
    initialState,
    reducers:{

    }
    
})

export const { addFav, removeFav} = myFavouritesSlice.actions;
export default myFavouritesSlice.reducer
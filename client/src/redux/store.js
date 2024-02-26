import { configureStore } from '@reduxjs/toolkit'
import { myFavouritesSlice} from './FavsSlices'

export const store = configureStore({
    reducer: {
       
    }, myFavourites: myFavouritesSlice
    })




import {create} from 'zustand'


const useCharacterState = create((set) => ({
    characters: [],
    addCharacter: (payload) => set((state) =>  [state.characters.push(payload)]),

    removeCharacter: (payload) => set((state) => [state.characters = state.characters.filter((char) => char.id !== Number(payload))]),
    
    removeAll:() => set((state) => [state.characters = state.characters.filter((char) => char.id == 999)]),
    
    filterByName:() => set((state) => [state.characters.sort((a, b) => {if(a.name < b.name)
                                                                            return -1;
                                                                        
                                                                        else if (a.name > b.name)
                                                                            return 1;
                                                                        
                                                                        else 
                                                                            return 0;})]),
    filterById: () => set((state) => [state.characters.sort((a, b) => a.id - b.id)]),
    
    filterByGender: () => set((state) => [state.characters.sort((a, b) => {if(a.gender < b.gender)
                                                                            return -1;
                                                                        
                                                                        else if (a.gender > b.gender)
                                                                            return 1;
                                                                        
                                                                        else 
                                                                            return 0;})]),

    filterByOrigin: () => set((state) => [state.characters.sort((a,b) => {if(a.origin.name < b.origin.name)
                                                                            return -1;
                                                                        
                                                                        else if (a.origin.name > b.origin.name)
                                                                            return 1;
                                                                        
                                                                        else 
                                                                            return 0;})]),

    filterByStatus: () => set((state) => [state.characters.sort((a,b) => {if(a.status < b.status)
                                                                            return -1;
                                                                            
                                                                            else if (a.status > b.status)
                                                                                return 1;
                                                                            
                                                                            else 
                                                                                return 0;})]),
    filterBySpecies: () => set((state) => [state.characters.sort((a,b) => {if(a.species < b.species)
                                                                                    return -1;
                                                                                
                                                                                else if (a.species > b.species)
                                                                                    return 1;
                                                                                
                                                                                else 
                                                                                    return 0;})]),
}))

export default useCharacterState
import create from 'zustand'

type Apartment = {
    name: string;
    number: string;
    availability: 'voľný' | 'predaný' | 'rezervovaný';
    numberOfRooms: number;
    totalArea: number;
    otherRoom: number;
}

export type State = {
    selectedApartment: Apartment | null
}

export type Actions = {
    setSelectedApartment: (apartment: Apartment) => void;
    reset: () => void;
}

const initialState: State = {
    selectedApartment: null
}

export const useStore = create<State & Actions>((set, _) => ({
    ...initialState,
    setSelectedApartment: (apartment: Apartment) =>{
        set({selectedApartment: apartment})
    },
    reset: () => {
        set(initialState)
    }
}))

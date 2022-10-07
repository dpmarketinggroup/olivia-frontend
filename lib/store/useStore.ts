import create from 'zustand'
import useSWR from "swr";
import axios from "axios";

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
    setSelectedApartment: (apartmentId: string, floor: 'Poschodie 3' | 'Poschodie 4' | 'Poschodie 5' | 'Poschodie 6' | 'Poschodie 7' | 'Poschodie 8' | 'Poschodie 9' | 'Poschodie 10' | 'Poschodie 11' | 'Poschodie 12' | 'Poschodie 13' | 'Poschodie 14') => void;
    reset: () => void;
}

const initialState: State = {
    selectedApartment: null
}

export const useStore = create<State & Actions>((set, _) => ({
    ...initialState,
    setSelectedApartment: async (apartmentId, floor) => {
        try {
            const res = await axios.get(`https://floating-scrubland-57360.herokuapp.com/api/byts?filters[poschodie][$eq]=${floor}&filters[cislo_bytu][$eq]=${apartmentId}`)
            set({selectedApartment: res.data})
        } catch (e) {
            console.log(e)
        }
    },
    reset: () => {
        set(initialState)
    }
}))

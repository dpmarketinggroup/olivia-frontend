import create from 'zustand'
import axios from "axios";
import { STRAPI_PROXY } from "../api";

export type State = {
    selectedApartment: any | null
}

export type Actions = {
    setSelectedApartment: (apartmentId: string, floor: number) => void;
    reset: () => void;
    getApartment: (apartmentId: number) => void;
}

const initialState: State = {
    selectedApartment: null
}

export const useStore = create<State & Actions>((set, _) => ({
    ...initialState,
    setSelectedApartment: async (apartmentId, floor) => {
        try {
            const res = await axios.get(`${STRAPI_PROXY}/byts?filters[poschodie][$eq]=${floor}&filters[cislo_bytu][$eq]=${apartmentId}`)
            set({selectedApartment: res.data.data})
        } catch (e) {
            console.log(e)
        }
    },
    reset: () => {
        set(initialState)
    },
    getApartment: async (apartmentId) => {
        try {
            const res = await axios.get(`${STRAPI_PROXY}/byts/${apartmentId}?populate=*`)
            set({selectedApartment: res.data})
        } catch (e) {
            set({selectedApartment: null})
            console.log(e)
        }
    }
}))

import axios from "axios";
import useSWR from "swr";
import {useStore} from "../store/useStore";

export const useApartment = (
    id: string,
    floor: 'Poschodie 3' | 'Poschodie 4' | 'Poschodie 5' | 'Poschodie 6' | 'Poschodie 7' | 'Poschodie 8' | 'Poschodie 9' | 'Poschodie 10' | 'Poschodie 11' | 'Poschodie 12' | 'Poschodie 13' | 'Poschodie 14'
) => {
    const fetcher = (url: string) => axios.get(url).then(res => res.data)
    const {data, error} = useSWR(`https://floating-scrubland-57360.herokuapp.com/api/byts?filters[poschodie][$eq]=${floor}&filters[cislo_bytu][$eq]=${id}`, fetcher)

    const setApartment = useStore(state => state.setSelectedApartment);

    if (data && !error) setApartment(data.data[0])
}

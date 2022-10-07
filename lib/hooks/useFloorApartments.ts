import axios from "axios";
import useSWR from 'swr'

const useFloorApartments = (
    floor: 'Poschodie 3' | 'Poschodie 4' | 'Poschodie 5' | 'Poschodie 6' | 'Poschodie 7' | 'Poschodie 8' | 'Poschodie 9' | 'Poschodie 10' | 'Poschodie 11' | 'Poschodie 12' | 'Poschodie 13' | 'Poschodie 14'
) => {
    const fetcher = (url: string) => axios.get(url).then(res => res.data)
    const {data, error} = useSWR(`https://floating-scrubland-57360.herokuapp.com/api/byts?filters[poschodie][$eq]=${floor}`, fetcher)

    return {
        apartments: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useFloorApartments

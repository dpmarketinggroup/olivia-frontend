import axios from "axios";
import { STRAPI_PROXY } from "../api";
import useSWR from 'swr'

const useFloorApartments = (
    floor: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
) => {
    const fetcher = (url: string) => axios.get(url).then(res => res.data)
    const {data, error} = useSWR(`${STRAPI_PROXY}/byts?filters[poschodie][$eq]=${floor}`, fetcher)

    return {
        apartments: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useFloorApartments

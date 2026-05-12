import {useEffect, useState} from "react";
import axios from "axios";

export function useAvailability(apartmentId: string) {
    const [dostupnost, setDostupnost] = useState("");
    useEffect(() => {
        async function fetch() {
            try {
                const res = await axios.get(`https://floating-scrubland-57360.herokuapp.com/api/byts?filters[cislo_bytu][$eq]=${apartmentId}`)
                setDostupnost(res.data.data[0].attributes.dostupnost)
            } catch (err) {
                console.log(err);
            }
        }
        fetch()
    }, [])
    return [dostupnost]
}

import {$authHost, $host} from "./index";

export const createSeat = async (seat) => {
    const {data} = await $authHost.post('api/seat', seat)
    return data
}

export const deleteSeat = async (id) => {
    const {data} = await $authHost.delete('api/seat/' + id)
    return data
}

export const updateSeat = async (seat) => {
    const {data} = await $authHost.post('api/seat/update', seat)
    return data
}

export const fetchSeats = async (fk_van_id) => {
    const {data} = await $host.get('api/seat', {params: {fk_van_id}})
    return data
}
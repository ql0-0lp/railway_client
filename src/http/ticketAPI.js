import {$authHost, $host} from "./index";

export const createTicket = async (ticket) => {
    const {data} = await $authHost.post('api/ticket', ticket)
    return data
}

export const deleteTicket = async (id) => {
    const {data} = await $authHost.delete('api/ticket/' + id)
    return data
}

export const updateTicket = async (ticket) => {
    const {data} = await $authHost.post('api/ticket/update', ticket)
    return data
}

export const fetchTickets = async (user_id) => {
    const {data} = await $authHost.get('api/ticket', {params: {user_id}})
    return data
}
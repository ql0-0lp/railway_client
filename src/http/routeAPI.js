import {$authHost, $host} from "./index";

export const createRoute = async (route) => {
    const {data} = await $authHost.post('api/route', route)
    return data
}

export const deleteRoute = async (id) => {
    const {data} = await $authHost.delete('api/route/' + id)
    return data
}

export const updateRoute = async (route) => {
    const {data} = await $authHost.post('api/route/update', route)
    return data
}

export const fetchRoutes = async (fc_train_id, city_departure, city_arrival, date_of_departure) => {
    const {data} = await $host.get('api/route',
        {params: {route_id: fc_train_id, city_departure, city_arrival, date_of_departure}}
    )
    return data
}

export const fetchRoutesToday = async () => {
    const {data} = await $host.get('api/route/today')
    return data
}
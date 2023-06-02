import {$authHost, $host} from "./index";

export const createRailwayStation = async (railwayStation) => {
    const {data} = await $authHost.post('api/railway-station', railwayStation)
    return data
}

export const deleteRailwayStation = async (id) => {
    const {data} = await $authHost.delete('api/railway-station/' + id)
    return data
}

export const updateRailwayStation = async (railwayStation) => {
    const {data} = await $authHost.post('api/railway-station/update', railwayStation)
    return data
}

export const fetchRailwayStation = async () => {
    const {data} = await $host.get('api/railway-station')
    return data
}
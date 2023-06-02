import {$authHost, $host} from "./index";

export const createVan = async (van) => {
    const {data} = await $authHost.post('api/van', van)
    return data
}

export const deleteVan = async (id) => {
    const {data} = await $authHost.delete('api/van/' + id)
    return data
}

export const updateVan = async (van) => {
    const {data} = await $authHost.post('api/van/update', van)
    return data
}

export const fetchVans = async (fc_train_id) => {
    const {data} = await $host.get('api/van', {params: {fc_train_id}})
    return data
}
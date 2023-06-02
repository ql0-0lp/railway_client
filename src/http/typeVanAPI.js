import {$authHost, $host} from "./index";

export const createTypeVan = async (typeVan) => {
    const {data} = await $authHost.post('api/type-van', typeVan)
    return data
}

export const deleteTypeVan = async (id) => {
    const {data} = await $authHost.delete('api/type-van/' + id)
    return data
}

export const updateTypeVan = async (typeVan) => {
    const {data} = await $authHost.post('api/type-van/update', typeVan)
    return data
}

export const fetchTypesVan = async () => {
    const {data} = await $host.get('api/type-van')
    return data
}
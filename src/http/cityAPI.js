import {$authHost, $host} from "./index";

export const createCity = async (city_name) => {
    const {data} = await $authHost.post('api/city', {city_name})
    return data
}

export const deleteCity = async (city_name) => {
    const {data} = await $authHost.delete('api/city/' + city_name)
    return data
}

export const updateCity = async (city) => {
    const {data} = await $authHost.post('api/city/update', city)
    return data
}

export const fetchCities = async () => {
    const {data} = await $host.get('api/city')
    return data
}
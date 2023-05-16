import {$authHost, $host} from "./index";

export const fetchCities = async () => {
    const {data} = await $host.get('api/city')
    return data
}
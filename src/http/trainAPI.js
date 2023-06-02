import {$authHost, $host} from "./index";

export const createTrain = async (fk_train_model) => {
    const {data} = await $authHost.post('api/train', {fk_train_model})
    return data
}

export const deleteTrain = async (id) => {
    const {data} = await $authHost.delete('api/train/' + id)
    return data
}

export const updateTrain = async (train) => {
    const {data} = await $authHost.post('api/train/update', train)
    return data
}

export const fetchTrains = async () => {
    const {data} = await $host.get('api/train')
    return data
}
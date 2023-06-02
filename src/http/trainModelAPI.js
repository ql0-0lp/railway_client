import {$authHost, $host} from "./index";

export const createTrainModel = async (trainModel) => {
    const {data} = await $authHost.post('api/train-model', trainModel)
    return data
}

export const deleteTrainModel = async (id) => {
    const {data} = await $authHost.delete('api/train-model/' + id)
    return data
}

export const updateTrainModel = async (trainModel) => {
    const {data} = await $authHost.post('api/train-model/update', trainModel)
    return data
}

export const fetchTrainModels = async () => {
    const {data} = await $host.get('api/train-model')
    return data
}
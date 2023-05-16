import {$host, $authHost} from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async (login, password) => {
    const {data} = await $host.post('api/user/registration', {login, password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const login = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const checkAdmin = async () => {
    const {data} = await $authHost.get('api/user/auth')
    return (jwt_decode(data).role === "ADMIN")
}

export const exit = async () => {
    localStorage.removeItem('token')
    return true
}
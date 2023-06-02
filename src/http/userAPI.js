import {$host, $authHost} from "./index";
import jwt_decode from 'jwt-decode'
import {useContext} from "react";
import {Context} from "../index";

export const registration = async (human) => {
    const {data} = await $host.post('api/user/registration', human)
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const login = async (human) => {
    const {data} = await $host.post('api/user/login', human)
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
    return (jwt_decode(data).user_role === "ADMIN")
}

export const exit = async () => {
    localStorage.removeItem('token')
    return true
}

export const updateHuman = async (human) => {
    const {data} = await $authHost.post('api/user/update', human)
    return data
}

export const adminUpdateHuman = async (human) => {
    const {data} = await $authHost.post('api/user/admin-update', human)
    return data
}

export const deleteHuman = async (user_id) => {
    const {data} = await $authHost.delete('api/user/' + user_id)
    return data
}
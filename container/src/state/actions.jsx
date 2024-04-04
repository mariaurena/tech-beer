import { LOGIN, LOGOUT } from './actionTypes'

export const onLogin = () => ({
    type: LOGIN,
})

export const onLogout = () => ({
    type: LOGOUT
})
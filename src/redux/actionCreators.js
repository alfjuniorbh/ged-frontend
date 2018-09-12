import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
        signinRequest: ['email', 'password'],
        signinSuccess: ['user'],
        signinFailure: ['error'],

        authRequest: null,
        authSuccess: ['user'],
        authFailure: null
    })
export default Creators
import * as types from './actionTypes'

const initialState = {
    authenticated: false
}

const authReducer = ( state = initialState, action ) => {

    switch( action.type ){

        case types.LOGIN:
            return {
                ...state,
                authenticated: true
            }

        case types.LOGOUT:
            return {
                ...state,
                authenticated: false
            }
            
        default:
            return state
    }
}

export default authReducer
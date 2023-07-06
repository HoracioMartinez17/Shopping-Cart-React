import { types } from "..";

const authReducer = (state: any, action: { type: any; payload: any; } ) => { 

    switch(action.type) {
        case types.login:
            return {
                ...state, 
                isLogged: true,
                user: action.payload
                }
        case types.logout:
            return {
                ...state, 
                isLogged: false,
                }
        default: state;
    }
}

export default authReducer;
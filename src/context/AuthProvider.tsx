import { ReactNode, useReducer } from "react";
import { types } from "..";
import authReducer from "./AuthReducer";
import { AuthContext } from "./AuthContext";




const init = () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return {
        isLogged: !!user,
        user
    }
}

const AuthProvider = ({ children }:{children: ReactNode}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init)



    const login = (name = '') => {
        const user = {
            id: 1,
            name,
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch({ type: types.login, payload: user })
    }

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({
            type: types.logout,
            payload: undefined
        })

    }

    return <AuthContext.Provider value={{ ...authState, login: login, logout: logout }}>
       <> {children}</>
        </AuthContext.Provider>

}

export default AuthProvider;
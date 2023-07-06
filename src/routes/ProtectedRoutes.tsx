import { ReactNode, useContext } from 'react'

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const ProtectedRoutes = ({children}:{children: ReactNode}) => {
    const {isLogged} = useContext(AuthContext);
    
  return isLogged ? <>{children}</>: <Navigate to={"/login"}/>
}
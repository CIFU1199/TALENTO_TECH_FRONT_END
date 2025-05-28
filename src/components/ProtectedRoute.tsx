import {Navigate} from 'react-router-dom';
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const ProtectedRoute = ({children}: Props) =>{
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to="login" replace />
    }

    return children;
}
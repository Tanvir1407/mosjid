import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({children}) {
    const isLogged = localStorage.getItem('isLogged');
    if(isLogged == 'true'){
        return children
    }
    else{
        return <Navigate to="/admin/auth/signin"/>
    }
}

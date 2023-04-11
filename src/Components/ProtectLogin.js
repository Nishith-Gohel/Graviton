import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'

const ProtectLogin = () => {
    const isLogged = localStorage.getItem("loggedin");
    // if(!isLogged)
    //     return <Outlet />
    return isLogged ? <Navigate to={"/"}/> : <Outlet/>
}

export default ProtectLogin

import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'

const ProtectProject = () => {
    const exists = localStorage.getItem("projects");
    return exists ? <Outlet/> : <Navigate to={"*"}/>
}


export default ProtectProject

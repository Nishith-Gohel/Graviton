import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import ProjectContent from './ProjectContent'
import ScrumBacklog from './ScrumBacklog'
import{ Routes, Route} from "react-router-dom"


const ProjectPage = () => {

    return (
        <div>
            <Header />
        
            <ul className="nav navbar-nav flex-column" id="side-menu">
                <li className="nav-item">
                    <Link className="nav-link text-center project-title-gap" to="/ProjectPage"> <strong>Test Project</strong>  </Link>
                </li>
                <li className="nav-item list-items">
                    <Link className="nav-link menu-items" to="/ProjectPage/ScrumBacklog"> <img src="Images and SVGs/Scrum.png" className="scrum-img"/> Scrum Backlog </Link>
                </li>
                <li className="nav-item list-items">
                    <Link className="nav-link menu-items" to="*"> <span class="material-symbols-outlined side-menu-icons">bookmark</span> Issues </Link>
                </li>
                <li className="nav-item list-items team-top-gap">
                    <Link className="nav-link menu-items" to="*"> <span class="material-symbols-outlined side-menu-icons">group</span> Team </Link>
                </li>
                <li className="nav-item list-items">
                    <Link className="nav-link menu-items" to="*"> <span class="material-symbols-outlined side-menu-icons">settings</span> Settings </Link>
                </li>
            </ul>
            
            <Routes>
                <Route path='/' element={<ProjectContent />}/>
                <Route path='/ScrumBacklog' element={<ScrumBacklog />}/>
            </Routes>
        </div>
    )
}

export default ProjectPage

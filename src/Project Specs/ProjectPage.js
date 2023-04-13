import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const ProjectPage = () => {

    return (
        <div>
            <Header />
        
            <ul className="nav navbar-nav flex-column" id="side-menu">
                <li className="nav-item">
                    <Link className="nav-link text-center project-title-gap" to="/ProjectPage"> <strong>Test Project</strong>  </Link>
                </li>
                <li className="nav-item list-items">
                    <Link className="nav-link menu-items" to="*"> <img src="Images and SVGs/Scrum.png" className="scrum-img"/> Scrum Backlog </Link>
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
            
            <div id="content-div">
                <img src="Images and SVGs/Project image.png" alt="project image" className="project-img ms-5 mt-3" />
                <div className="project-details-encloser">
                    <h1 className="project-details">Test Project</h1>
                    <p className="project-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur quis, iure, at est modi optio cumque voluptate officiis veritatis in. Quod, eius! Iure itaque, accusamus enim molestias aliquam deserunt labore? Nesciunt libero repellat a sint. Consectetur fugit laboriosam sapiente ratione consequatur eius quia, tenetur quis omnis qui deleniti nemo. Reiciendis consequatur optio aperiam, facilis hic id odio accusantium ullam atque, consectetur obcaecati tenetur dolorum neque laudantium distinctio voluptatibus ad nulla ipsam! Totam quo consequuntur sequi quos eveniet corrupti mollitia, suscipit accusantium, doloribus, error quasi sunt! Cumque rem totam explicabo.</p>
                </div>

                <div className="team-encloser">
                    <div className="team">
                        <h4 className="h4 team-text">Team</h4>
                    </div>
                    
                    <p>Person1</p>
                    <p>Person1</p>
                    <p>Person1</p>
                </div>


            </div>
        </div>
    )
}

export default ProjectPage

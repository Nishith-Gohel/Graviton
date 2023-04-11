import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const loggedUser = JSON.parse(localStorage.getItem("current")), userName = loggedUser.name, userEmail = loggedUser.email;

    const navigate = useNavigate();
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("loggedin");
        localStorage.removeItem("current");
        navigate("/login");
    }

    return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-light" id="header-style">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="Images and SVGs/Brand Logo Header.png" alt="Brand Logo" id="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-items">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Home </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="*"> Workspaces </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="*"> Goals </Link>
                        </li>
                    </ul>

                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    
                    
                    {/* <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="material-symbols-outlined"> apps </span>
                    </button> */}

                    <button type="button" className="btn btn-light ms-3" aria-expanded="false">
                        <i className="fa-regular fa-bell"></i>
                    </button>

                    <div className="dropdown">
                        <button type="button" className="btn btn-light ms-3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-circle-question"></i>
                        </button>
                        
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link className="dropdown-item" to="*"> <span className="material-symbols-outlined help-icons">help_center</span> Help Center </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="*"> <span className="material-symbols-outlined help-icons">support_agent</span> Contact Support </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="*"> <span className="material-symbols-outlined help-icons">explore</span> Explore the product </Link>
                            </li>
                        </ul>
                    </div>

                    <div id='vertical-line'></div>

                    <div className="btn-group">
                        <button type="button" className="btn btn-light ms-5 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-user"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <img src="Images and SVGs/User Profile.jpg" alt="User profile" class="user-image" />
                                <h3 className="user-details dropdown-header">{userName}</h3> 
                                <h6 className="user-details dropdown-header">{userEmail}</h6>
                            </li>
                            {/* <li><button className="dropdown-item text-center edit-profile" type="button">Edit Profile</button></li> */}
                            <li><Link class="dropdown-item text-center edit-profile" to="*"> Edit Profile </Link></li>
                            <li><hr className="dropdown-divider"/></li>

                            <li>
                                <Link className="dropdown-item" to="/settings"> Settings </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/pricing"> Pricing </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/about"> About </Link>
                            </li>

                            <li><hr className="dropdown-divider"/></li>
                            <li><Link onClick={handleLogout} class="dropdown-item">Logout</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>

        {/* <div className='container'>
          <p>Hello there {userName} 👋</p>
          <p>Welcome !</p>
        </div> */}

      </div>
    </>
    );
}

export default Header

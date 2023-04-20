import React from 'react'
import Header from './Header';

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const AddProject = () => {

    const [details, setDetails] = useState({
        name: "",
        description: ""
    })
    
    const navigate = useNavigate();
    const handleCreate = (event) => {
        event.preventDefault();
        let name = details.name, description = details.description;

        if(!name)
            alert("Please give a project name");
        else if(!description)
            alert("Please fill out the project description");
        else{
            let projects = JSON.parse(localStorage.getItem("projects"));
            if(!projects){
                projects = [];
                projects.push(details);
                localStorage.setItem("projects", JSON.stringify(projects));
            }
            else{
                projects.push(details);
                localStorage.setItem("projects", JSON.stringify(projects));
            }
            navigate("/ProjectPage");
        }
    }

    return (
        <div>
            <Header />

            <div className="details-enclosed">
                <h5 className="h5">New project details</h5>

                <form onSubmit={handleCreate}>
                    <div className="form-outline input-fields">
                        <label htmlFor="project-name" className="form-label">Project name <span className='required'>*</span> </label>
                        <input className="form-control" type="text" id="project-name" 
                            name="name"
                            value={details.name}
                            onChange={(event) => 
                                setDetails({
                                    ...details,
                                    [event.target.name]: event.target.value
                                })
                            }
                        />
                        
                    </div>

                    <div className="form-outline input-fields">
                        <label htmlFor="project-desc" className="form-label">Project Description <span className='required'>*</span> </label>
                        <textarea className="form-control" id="project-desc"
                            name="description"
                            value={details.description}
                            onChange={(event) => 
                                setDetails({
                                    ...details,
                                    [event.target.name]: event.target.value
                                })
                            }
                        >
                        </textarea>
                    </div>

                    {/* <div className="input-fields">
                        <input type="radio" className="btn-check" id="working-on-button" autocomplete="off" 
                            name="category"
                            value="Working on"
                            onChange={(event) => 
                                setDetails({
                                    ...details,
                                    [event.target.name]: event.target.value      
                                })    
                            }
                        />
                        <label className="btn btn-outline-secondary input-buttons" htmlFor="working-on-button">Working on</label>

                        <input type="radio" className="btn-check" id="watching-button" autocomplete="off" 
                            name="category"
                            value="Watching"
                            onChange={(event) =>  
                                setDetails({
                                    ...details,
                                    [event.target.name]: event.target.value
                                })       
                            }
                        />
                        <label className="btn btn-outline-secondary input-buttons" htmlFor="watching-button">Watching</label>
                    </div> */}

                    <Link to="/" role="button" className="btn btn-light back-button"> BACK </Link>
                    <button type="submit" className="btn btn-light create-project-button"> CREATE PROJECT </button>
                </form>
            </div>

        </div>
    )
}

export default AddProject

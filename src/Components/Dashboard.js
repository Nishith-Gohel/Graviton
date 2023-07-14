import React from 'react'
import Header from './Header';
import Footer from './Footer';

import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <>
      <div>
        <Header />

        <h1 className="h1 heading">Projects Dashboard</h1>
        
        <div className="working-on">
          <h3 className='text-center'>Working On
            <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Find all the user stories, tasks or issues you are currently working on, under this category.">
              <span className="material-symbols-outlined info">info</span>
            </span>
          </h3>

          <hr />
          <h5>Story - 1</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora fugit deserunt porro adipisci voluptatem ratione obcaecati iusto illo nemo. </p>

          <h5>Story - 2</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora fugit deserunt porro adipisci. </p>

          <h5>Task - 1</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia quidem pariatur unde sed dicta vitae animi culpa sint facilis. </p>

          <h5>Issue - 1</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div className="watching">
          <h3 className='text-center'>Watching
            <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Keep an eye on or follow user stories, tasks or issues that you wish to and find them under this category.">
              <span className="material-symbols-outlined info">info</span>
            </span>
          </h3>

          <hr />

          <h5>Task - 2</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde similique esse deleniti commodi doloribus.</p>

          <h5>Issue - 2</h5>
          <p>Complete developing the remaining UI.</p>

        </div>

        <div className="add-project text-center">
            <img src="Images and SVGs/Add a project.jpg" alt="add project img" width="104px" height="104px"/> <br />
            <Link to="/addProject" role="button" className="btn btn-light buttons"> Add a new project </Link>
        </div>

        <div className="manage-projects text-center">
            <img src="Images and SVGs/Manage Projects.png" alt="manage projects img" width="104px" height="104px"/> <br />
            <Link to="*" role="button" className="btn btn-light buttons"> Manage existing projects </Link>
        </div>

        <Footer />

      </div>
    </>
  );
}

export default Dashboard

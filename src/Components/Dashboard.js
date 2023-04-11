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
          <h5>Project - 1</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum tempora fugit deserunt porro adipisci voluptatem ratione obcaecati iusto illo nemo. Repellat, quis temporibus! Dolorem ut accusantium ducimus totam, soluta dolorum magni modi aliquid! Necessitatibus cumque quasi quae inventore illo provident non, dicta, qui, omnis atque est accusamus rem esse obcaecati! Dignissimos totam quasi accusantium!</p>

          <h5>Project-2</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere distinctio iste in non modi eveniet fugit. Molestiae cum veritatis dicta quia nesciunt porro ratione dolorem tempore magni perspiciatis iure consectetur autem, ipsam maiores ipsum id quam, non labore similique ut sunt! Sed consequuntur, eveniet repellat deserunt quisquam perspiciatis nobis minus excepturi! Distinctio?</p>
        </div>

        <div className="watching">
          <h3 className='text-center'>Watching
            <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Keep an eye on or follow user stories, tasks or issues that you wish to and find them under this category.">
              <span className="material-symbols-outlined info">info</span>
            </span>
          </h3>

          <hr />

          <h5>Project-3</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere distinctio iste in non modi eveniet fugit. Molestiae cum veritatis dicta quia nesciunt porro ratione dolorem tempore magni perspiciatis iure consectetur autem, ipsam maiores ipsum id quam, non labore similique ut sunt! Sed consequuntur, eveniet repellat deserunt quisquam perspiciatis nobis minus excepturi! Distinctio?</p>

        </div>

        <div className="add-project text-center">
            <img src="Images and SVGs/Add a project.jpg" alt="add project img" width="104px" height="104px"/> <br />
            <Link to="/addProject" role="button" class="btn btn-light buttons"> Add a new project </Link>
        </div>

        <div className="manage-projects text-center">
            <img src="Images and SVGs/Manage Projects.png" alt="manage projects img" width="104px" height="104px"/> <br />
            <Link to="*" role="button" class="btn btn-light buttons"> Manage existing projects </Link>
        </div>

        <Footer />

      </div>
    </>
  );
}

export default Dashboard

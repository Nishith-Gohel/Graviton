import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
 
const ScrumBacklog = () => {

  const [story, setStory] = useState({
    subject: "",
    description: "",
    category: "",
    status: "New",
    assignedTo: "Unassigned",
    underSprint: "None",
    points: ""
  })

  const btn1 = document.getElementById("working-on-button"), btn2 = document.getElementById("watching-button");
  const createStory = (event) => {
    event.preventDefault();
    if(!story.subject)
        alert("Please fill out the story subject");
    else if(!story.description)
        alert("Please fill out the story description");
    else if(btn1.checked === false && btn2.checked === false)
        alert("Please specify the category you want this user story to belong to, Working-On or Watching");
    else{
        let stories = JSON.parse(localStorage.getItem("stories"));
        if(!stories){
            stories = [];
            stories.push(story);
            localStorage.setItem("stories", JSON.stringify(stories));
        }
        else{
            stories.push(story);
            localStorage.setItem("stories", JSON.stringify(stories));
        }
          
        clearStoryInput();
        window.$('#myModal').modal('hide');
    }
  }

  const clearStoryInput = () => {
      setStory({
        subject: "",
        description: "",
        category: "",
        status: "New",
        assignedTo: "Unassigned",
        underSprint: "None",
        points: ""
      })

      btn1.checked = false;
      btn2.checked = false;
  }

  const [sprint, setSprint] = useState({
      sprintName: "",
      start: "",
      end: ""
  })

  const createSprint = (event) => {
      event.preventDefault();

      const startDate = new Date(sprint.start), endDate = new Date(sprint.end);

      if(!sprint.sprintName)
          alert("Please enter the sprint name");
      else if(!sprint.start)
          alert("Please provide a start date for the sprint");
      else if(!sprint.end)
          alert("Please provide an end date for the sprint");
      else if(startDate.valueOf() >= endDate.valueOf())
          alert("Sprint start date should be less than the end date");
      else{
          let sprints = JSON.parse(localStorage.getItem("sprints"));
          if(!sprints){
            sprints = [];
            sprints.push(sprint);
            localStorage.setItem("sprints", JSON.stringify(sprints));
          }
          else{
            sprints.push(sprint);
            localStorage.setItem("sprints", JSON.stringify(sprints));
          }

          clearSprintInput();
          window.$('#sprint-modal').modal('hide');
      }
  }

  const clearSprintInput = () => {
      setSprint({
        sprintName: "",
        start: "",
        end: ""
      })
      document.getElementById("start").value = "";
      document.getElementById("end").value = "";
  }

  return (
    <>
      <div className="container-fluid prime-encloser">
        <div className="row">

          <div className="col-md-8 Backlog-encloser">
            <h2 className='h2'>Scrum</h2>
            <div className="scrum-stats-bar mt-3 py-3 px-3">
                <div className='progress-bar'></div>
                <p className='stats'>0%</p>
                <p className='stats'>0 defined points</p>
                <p className='stats'>0 closed points</p>
            </div>

            <div className='mid-div'>
                <h2 className='backlog-heading h2'>Backlog</h2> <p className='story-count'>0 user stories</p>
                <button type="button" className="btn btn-light shadow-sm float-end add-story-button" data-bs-toggle="modal" data-bs-target="#myModal"> 
                    <span className="material-symbols-outlined add-icon">add</span> USER STORY
                </button>

                <div className='modal fade' id='myModal' role="dialog" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <form onSubmit={createStory}>
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">New User Story</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                  <div className='container-fluid'>
                                    <div class="row">
                                      <div class="col-md-8">
                                        <div className='form-floating'>
                                          <input className="form-control story-attributes-form" id="subject" type="text" 
                                              name='subject'
                                              value={story.subject}
                                              onChange={(event) => 
                                                  setStory({
                                                      ...story,
                                                      [event.target.name] : event.target.value
                                                  })
                                              }
                                          />
                                          <label htmlFor="subject">Subject</label>
                                        </div>
                                        <div className='form-floating'>
                                          <textarea className='form-control story-attributes-form' id="story-desc-form"
                                              name="description"
                                              value={story.description}
                                              onChange={(event) =>
                                                  setStory({
                                                      ...story,
                                                      [event.target.name] : event.target.value
                                                  })
                                              }
                                          >
                                          </textarea>  
                                          <label htmlFor="story-desc-form">Please add a description to help better understand this user story</label>
                                        </div>

                                        <input type="radio" className="btn-check" id="working-on-button" autocomplete="off" 
                                            name="category"
                                            value="Working on"
                                            onChange={(event) =>
                                                setStory({
                                                    ...story,
                                                    [event.target.name]: event.target.value      
                                                })   
                                              } 
                                        />
                                        <label className="btn btn-outline-secondary category-btn" htmlFor="working-on-button">Working on</label>

                                        <input type="radio" className="btn-check" id="watching-button" autocomplete="off" 
                                            name="category"
                                            value="Watching"
                                            onChange={(event) =>
                                                setStory({
                                                    ...story,
                                                    [event.target.name]: event.target.value
                                                })  
                                              }     
                                        />
                                        <label className="btn btn-outline-secondary category-btn" htmlFor="watching-button">Watching</label>
                                      </div>

                                      <div className="col-md-4">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-select story-attributes-form" id='status'
                                          name='status'
                                          value={story.status}
                                          onChange={(event) =>                                              
                                              setStory({
                                                  ...story,
                                                  [event.target.name] : event.target.value
                                              })
                                          }
                                        >
                                          <option value="New" selected>New</option>
                                          <option value="In Progress">In Progress</option>
                                          <option value="Ready for test">Ready for test</option>
                                          <option value="Done">Done</option>
                                          <option value="Archived">Archived</option>
                                        </select>

                                        <label htmlFor="assign" className="form-label">Assign to</label>
                                        <select className="form-select story-attributes-form" id="assign"
                                            name='assignedTo'
                                            value={story.assignedTo}
                                            onChange={(event) =>                                               
                                                setStory({
                                                    ...story,
                                                    [event.target.name] : event.target.value
                                                })                                       
                                            }
                                        >
                                          <option selected>Unassigned</option>
                                          <option value="Person 1">Person 1</option>
                                          <option value="Person 2">Person 2</option>
                                          <option value="Person 3">Person 3</option>
                                          {/* here a for loop will appear that would iterate through all the member names present and display them */}
                                        </select>

                                        <label htmlFor="belongs" className="form-label">Under sprint</label>
                                        <select className="form-select story-attributes-form" id='belongs'
                                            name='underSprint'
                                            value={story.underSprint}
                                            onChange={(event) =>                                                
                                                setStory({
                                                    ...story,
                                                    [event.target.name] : event.target.value
                                                })                                             
                                            }
                                        >
                                          <option value="None" selected>None</option>
                                          <option value="Sprint 1">Sprint 1</option>
                                          <option value="Sprint 2">Sprint 2</option>
                                        </select>

                                        <label htmlFor="points" className='form-label'>Points</label>
                                        <input type="number" className='form-control' id="points" step="1" min="1" max="10" placeholder='Value between 1 and 10'
                                            name='points'
                                            value={story.points}
                                            onChange={(event) =>                                               
                                                setStory({
                                                    ...story,
                                                    [event.target.name] : event.target.value
                                                })                                          
                                            }
                                        />
                                      </div>

                                    </div>
                                  </div>
                                  
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                  <button type="submit" className="btn btn-primary">Create user story</button>
                                </div>
                            
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <div className='user-stories'>
                <div className='story-info-heading'>
                  <h6 className='h6 story-details'> USER STORY </h6>
                  <div className='float-end'>
                    <h6 className='h6 story-details'> STATUS </h6>
                    <h6 className='h6 ms-4 story-details'> POINTS </h6>
                  </div>
                </div>

                <div className='story-listing'>
                  <p className='story-details'>Story 1</p>
                  <div className='float-end'>
                      <p className='story-details'>New</p> 
                      <div className='story-points story-details'> <p>20</p> </div>
                  </div>
                </div>
                <div className='story-listing'>
                  <p className='story-details'>Story 2</p>
                  <div className='float-end'>
                      <p className='story-details'>In progress</p> 
                      <div className='story-points story-details'> <p>20</p> </div>

                  </div>
                </div>
                <div className='story-listing'>
                  <p className='story-details'>Story 3</p>
                  <div className='float-end'>
                      <p className='story-details'>Ready for test</p> 
                      <div className='story-points story-details'> <p>0</p> </div>

                  </div>
                </div>
                <div className='story-listing'>
                  <p className='story-details'>Story 1</p>
                  <div className='float-end'>
                      <p className='story-details'>Done</p> 
                      <div className='story-points story-details'> <p>1</p> </div>

                  </div>
                </div>
                <div className='story-listing'>
                  <p className='story-details'>Story 1</p>
                  <div className='float-end'>
                      <p className='story-details'>Archived</p> 
                      <div className='story-points story-details'> <p>5</p> </div>

                  </div>
                </div>
            </div>

          </div>


          <div className="col-md-4 Sprint-encloser">
              <h2 className='h2 sprints'>2 Sprints</h2>
              <Link role="button" className='add-sprint float-end' data-bs-toggle="modal" data-bs-target="#sprint-modal">Add +</Link>
              <div className='modal fade' id='sprint-modal' role="dialog" tabindex="-1" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                          <form onSubmit={createSprint}>
                              <div class="modal-header">
                                <h5 class="modal-title">New sprint</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div className='form-floating'>
                                    <input className="form-control" id="name-input" type="text" 
                                        name='sprintName'
                                        value={sprint.sprintName}
                                        onChange={(event) => 
                                            setSprint({
                                                ...sprint, 
                                                [event.target.name] : event.target.value
                                            })
                                        }
                                    />
                                    <label htmlFor="name-input">sprint name</label>
                                </div>
                                <div className='date-inputs'>
                                  <label htmlFor="start" className="form-label">Start: </label>
                                  <input type="date" className='form-control' id="start" min="2000-01-01" 
                                      name='start'
                                      value={sprint.start}
                                      onChange={(event) => {
                                            const startDate = moment(new Date(event.target.value)).format("YYYY-MM-DD");
                                            setSprint({
                                                ...sprint,
                                                [event.target.name] : startDate
                                            })
                                        }
                                      }
                                  />
                                </div>
                                <div className='date-inputs float-end'>
                                  <label htmlFor="end" className="form-label">End: </label>
                                  <input type="date" className='form-control' id="end" min="2000-01-01" 
                                      name='end'
                                      value={sprint.end}
                                      onChange={(event) => {
                                            const endDate = moment(new Date(event.target.value)).format("YYYY-MM-DD");
                                            setSprint({
                                                ...sprint,
                                                [event.target.name] : endDate
                                            })
                                        }
                                      }
                                  />
                                </div>
                              </div>

                              <div class="modal-footer">
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>


              <div className='sprint-details'>          
                <div className='keep-left'>
                  <h5 className='h5 sprint-name'>Sprint 1</h5>
                  <p>20 Apr 2023 - 30 Apr 2023</p>
                </div>
                <div className='keep-right text-end float-end'>
                  <p id='closed'>0 closed</p>
                  <p>0 total</p>
                </div>
                <button class="btn btn-light sprint-taskboard" type="button">SPRINT TASKBOARD</button>
              </div>

              <div className='sprint-details'>
                <div className='keep-left'>
                  <h5 className='h5 sprint-name'>Sprint 2</h5>
                  <p>30 Apr 2023 - 10 May 2023</p>
                </div>
                <div className='keep-right text-end float-end'>
                  <p id='closed'>0 closed</p>
                  <p>0 total</p>
                </div>
                <button class="btn btn-light sprint-taskboard" type="button">SPRINT TASKBOARD</button>
              </div>
              {/* here a for loop will iterate through all the sprints present and display them as in the structure above for sprint 1 */}
              
          </div>

        </div>
      </div>


      This is the scrum-backlog component.
    </>
  )
}

export default ScrumBacklog

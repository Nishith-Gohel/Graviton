import React from 'react'
import { useState } from 'react';

const Issues = () => {

  const [issue, setIssue] = useState({
      subject: "",
      description: "",
      category: "",
      status: "New",
      assignedTo: "Unassigned",
      Type: "Bug",
      Priority: "Normal",
      underSprint: "None",
  })

  const btn1 = document.getElementById("working-on-button"), btn2 = document.getElementById("watching-button");
  const createIssue = (event) => {
    event.preventDefault();

    if(!issue.subject)
        alert("Please fill out the subject of the issue");
    else if(!issue.description)
        alert("Please provide a short description for the issue");
    else if(btn1.checked === false && btn2.checked === false)
        alert("Please specify the category you want this issue to belong to, Working-On or Watching");
    else{
        let issues = JSON.parse(localStorage.getItem("issues"));
        if(!issues){
            issues = [];
            issues.push(issue);
            localStorage.setItem("issues", JSON.stringify(issues));
        }
        else{
            issues.push(issue);
            localStorage.setItem("issues", JSON.stringify(issues));
        }

        clearContent();
        window.$('#issue-modal').modal('hide');
    }
  }

  const clearContent = () => {
      setIssue({
        subject: "",
        description: "",
        category: "",
        status: "New",
        assignedTo: "Unassigned",
        Type: "Bug",
        Priority: "Normal",
        underSprint: "None",
      })

      btn1.checked = false;
      btn2.checked = false;
  }

  return (
    <>
      <div id='issue-encloser'>
        <h2 className='h2 issue-heading'>Issues</h2>
        <button type="button" className="btn btn-light shadow-sm float-end add-issue-button" data-bs-toggle="modal" data-bs-target="#issue-modal"> 
            <span className="material-symbols-outlined add-icon">add</span> NEW ISSUE
        </button>
        <div className='modal fade' id='issue-modal' role="dialog" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <form onSubmit={createIssue}>
                          <div className="modal-header">
                              <h1 className="modal-title fs-5">New issue</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                          </div>
                          <div className="modal-body">
                              <div className='container-fluid'>
                                <div class="row">
                                  <div class="col-md-8">
                                    <div className='form-floating'>
                                      <input className="form-control issue-input" id="subject" type="text" 
                                          name='subject'
                                          value={issue.subject}
                                          onChange={(event) => 
                                              setIssue({
                                                  ...issue,
                                                  [event.target.name] : event.target.value
                                              })
                                          }
                                      />
                                      <label htmlFor="subject">Subject</label>
                                    </div>
                                    <div className='form-floating'>
                                      <textarea className='form-control issue-input' id="issue-desc-form"
                                          name="description"
                                          value={issue.description}
                                          onChange={(event) =>
                                              setIssue({
                                                  ...issue,
                                                  [event.target.name] : event.target.value
                                              })
                                          }
                                      >
                                      </textarea>  
                                      <label htmlFor="issue-desc-form">Please add a description to help better understand this issue</label>
                                    </div>

                                    <input type="radio" className="btn-check" id="working-on-button" autocomplete="off" 
                                        name="category"
                                        value="Working on"
                                        onChange={(event) =>
                                            setIssue({
                                                ...issue,
                                                [event.target.name]: event.target.value      
                                            })   
                                          } 
                                    />
                                    <label className="btn btn-outline-secondary category-btn" htmlFor="working-on-button">Working on</label>

                                    <input type="radio" className="btn-check" id="watching-button" autocomplete="off" 
                                        name="category"
                                        value="Watching"
                                        onChange={(event) =>
                                            setIssue({
                                                ...issue,
                                                [event.target.name]: event.target.value
                                            })  
                                        }     
                                    />
                                    <label className="btn btn-outline-secondary category-btn" htmlFor="watching-button">Watching</label>
                                  </div>

                                  <div className="col-md-4">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select className="form-select issue-input" id='status'
                                        name='status'
                                        value={issue.status}
                                        onChange={(event) =>                                              
                                            setIssue({
                                                ...issue,
                                                [event.target.name] : event.target.value
                                            })
                                        }
                                    >
                                      <option value="New" selected>New</option>
                                      <option value="In Progress">In Progress</option>
                                      <option value="Needs Info">Needs Info</option>
                                      <option value="Rejected">Rejected</option>
                                      <option value="Postponed">Postponed</option>
                                      <option value="Ready for test">Ready for test</option>
                                      <option value="Closed">Closed</option>
                                    </select>

                                    <label htmlFor="assign" className="form-label">Assign to</label>
                                    <select className="form-select issue-input" id="assign"
                                        name='assignedTo'
                                        value={issue.assignedTo}
                                        onChange={(event) =>                                               
                                            setIssue({
                                                ...issue,
                                                [event.target.name] : event.target.value
                                            })                                       
                                        }
                                    >
                                      <option selected>Unassigned</option>
                                      <option value="Me">Me</option>
                                      <option value="Person 1">Person 1</option>
                                      <option value="Person 2">Person 2</option>
                                      {/* here a for loop will appear that would iterate through all the member names present and display them */}
                                    </select>

                                    <label htmlFor="Type" className="form-label">Type</label>
                                    <select className="form-select issue-input" id='Type'
                                        name='Type'
                                        value={issue.Type}
                                        onChange={(event) =>                                               
                                            setIssue({
                                                ...issue,
                                                [event.target.name] : event.target.value
                                            })                                       
                                        }
                                    >
                                      <option value="Bug" selected>Bug</option>
                                      <option value="Question">Question</option>
                                      <option value="Enhancement">Enhancement</option>
                                    </select>

                                    <label htmlFor="priority" className="form-label">Priority</label>
                                    <select className="form-select issue-input" id='priority'
                                        name='Priority'
                                        value={issue.Priority}
                                        onChange={(event) =>                                               
                                            setIssue({
                                                ...issue,
                                                [event.target.name] : event.target.value
                                            })                                       
                                        }
                                    >
                                      <option value="Low">Low</option>
                                      <option value="Normal" selected>Normal</option>
                                      <option value="High">High</option>
                                    </select>

                                    <label htmlFor="belongs" className="form-label">Under sprint</label>
                                    <select className="form-select" id='belongs'
                                        name='underSprint'
                                        value={issue.underSprint}
                                        onChange={(event) =>                                           
                                            setIssue({
                                                ...issue,
                                                [event.target.name] : event.target.value
                                            })                                        
                                        }
                                    >
                                      <option value="None" selected>None</option>
                                      <option value="Sprint 1">Sprint 1</option>
                                      <option value="Sprint 2">Sprint 2</option>
                                    </select>
    
                                  </div>

                                </div>
                              </div> 
                          </div>

                          <div className="modal-footer">
                            <button type="button" className="btn btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Create</button>
                          </div>
                    </form>
                </div>
            </div>
        </div>


        <div className='issues'>
            <div className='issue-info'>
                <h6 className='h6 issue-details-heading'>TYPE</h6>
                <h6 className='h6 issue-details-heading'>PRIORITY</h6>
                <h6 className='h6 issue-details-heading'>ISSUE</h6>
                <div className='float-end'>
                  <h6 className='h6 issue-details-heading'>STATUS</h6>
                  <h6 className='h6 issue-details-heading'>ASSIGNED TO</h6>
                </div>
            </div>

            <div className='issues-listing'>
              <div className='issue-details type'><p>Enhancement</p></div>
              <div className='issue-details priority'><p>Normal</p></div>
              <div className='issue-details issue-subject'><p>Modify the project page UI</p></div>
              <div className='float-end'>
                  <div className='issue-details status'><p>Ready for test</p></div>
                  <div className='issue-details assigned-to'><p>Ayushmaan</p></div>  
              </div>
            </div>

            <div className='issues-listing'>
              <div className='issue-details type'><p>Quesrtion</p></div>
              <div className='issue-details priority'><p>High</p></div>
              <div className='issue-details issue-subject'><p>See whether the end alignment issue in issues page gets resolved</p></div>
              <div className='float-end'>
                  <div className='issue-details status'><p>In Progress</p></div>
                  <div className='issue-details assigned-to'><p>Nishith</p></div>  
              </div>
            </div>

            <div className='issues-listing'>
              <div className='issue-details type'><p>Bug</p></div>
              <div className='issue-details priority'><p>High</p></div>
              <div className='issue-details issue-subject'><p>Ok fine if the right part works, let's see for the left part</p></div>
              <div className='float-end'>
                  <div className='issue-details status'><p>In Progres</p></div>
                  <div className='issue-details assigned-to'><p>Johnson</p></div>  
              </div>
            </div>
        </div>

        {/* This is the issues component. */}
      </div>
    </>
  )
}

export default Issues

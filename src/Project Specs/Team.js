import React from 'react'
import { useState } from 'react'

const Team = () => {

  const [member, setMember] = useState({
      name : "",
      email : "",
      role : "None"
  })

  const [members, setMembers] = useState(JSON.parse(localStorage.getItem("team_members")));

  const addMember = (event) => {
        event.preventDefault();
        const emailID = member.email, regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

        if(!member.name)
            alert("Please enter the member name");
        else if(!member.email)
            alert("Please enter the member email");
        else if(!regex.test(emailID))
            alert("Please enter a valid email address");
        else
            setMembers([...members, member]);
    
        clearContent();
        window.$('#teams-modal').modal('hide');
  }

  const clearContent = () => {
        setMember({
            name : "",
            email : "", 
            role : "None"
        })
  }

  const deleteMember = (emailID) => {
        let newList =  members.filter(member => {
            return member.email !== emailID;
        })
        setMembers(newList);
  }
   
  localStorage.setItem("team_members", JSON.stringify(members));
//   console.log(members);             
  return (
    <>
      <div id='teams-wrapper'>
        <h2 className='h2 teams-heading'>Manage members</h2>
        <button type="button" className="btn btn-light shadow-sm float-end add-member-button" data-bs-toggle="modal" data-bs-target="#teams-modal"> 
            <span className="material-symbols-outlined add-icon">add</span> NEW MEMBER
        </button>

        <div className='modal fade' id='teams-modal' role="dialog" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <form onSubmit={addMember}>
                          <div className="modal-header">
                              <h1 className="modal-title fs-5">Member details</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                          </div>
                          <div className="modal-body">
                              <div className='form-outline'>
                                <label htmlFor="member-name">Name <span className='required'>*</span></label>
                                <input type="text" className="form-control member-detail-input" id="member-name" 
                                    name= "name"
                                    value={member.name}
                                    onChange={(event) => 
                                        setMember({
                                            ...member,
                                            [event.target.name] : event.target.value
                                        })
                                    }
                                />
                              </div>

                              <div className='form-outline'>
                                <label htmlFor="member-email">Email <span className='required'>*</span></label>
                                  <input type="email" className="form-control member-detail-input" id="member-email"
                                      name="email"
                                      value={member.email}
                                      onChange={(event) => 
                                          setMember({
                                              ...member,
                                              [event.target.name] : event.target.value
                                          })
                                      }
                                  />            

                              </div> 

                              <label htmlFor="role" className="form-label">Role <span className='required'>*</span></label>
                                    <select className="form-select" id='role'
                                        name='role'
                                        value={member.role}
                                        onChange={(event) =>                                              
                                            setMember({
                                                ...member,
                                                [event.target.name] : event.target.value
                                            })
                                        }
                                    >
                                      <option value="None" selected>None</option>
                                      <option value="Product Owner">Product Owner</option>
                                      <option value="Manager">Manager</option>
                                      <option value="Tester">Tester</option>
                                      <option value="Frontend Developer">Frontend Developer</option>
                                      <option value="Backend Developer">Backend Developer</option>
                                      <option value="Fullstack Developer">Fullstack Developer</option>
                                      <option value="Designer">Designer</option>
                                      <option value="Stakeholder">Stakeholder</option>
                                    </select>
                          </div>

                          <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add member</button>
                          </div>
                    </form>
                </div>
            </div>
        </div>
                                        
        <div className="mt-5">
            <div className='d-flex mb-1'>
                <h6 className="h6 equal-width">Member</h6>
                <h6 className="h6 equal-width">Admin</h6>
                <h6 className="h6 equal-width">Role</h6>
                <h6 className="h6 equal-width">Status</h6>
            </div>

            <hr className='ruler mb-4'/>

            {/* <div className='d-flex mb-3'>
                <div className='equal-width'>
                    <p>Nishith Gohel</p>                                          
                    <small>nishith.gohel@gmail.com</small>                                          
                </div>
                <div className='equal-width'>
                    <p>Yes</p>
                </div>
                <div className='equal-width'>
                    <p>Frontend Developer</p>
                </div>
                <div className='equal-width'>
                    <span>Active</span>
                    <button type="button" className="btn btn-outline-danger ms-5">Delete <i className="ms-1 fa-solid fa-trash"></i></button>
                </div>
            </div>       */}

            {
                members === null ? "" : 
                members.map(member => {
                    return(
                        <>
                            <div className='d-flex mb-3' key={member.email}>
                                <div className='equal-width'>
                                    <p className='mb-0'>{member.name}</p>
                                    <small>{member.email}</small>
                                </div>
                                <div className='equal-width'>
                                    <p>Yes</p>
                                </div>
                                <div className='equal-width'>
                                    <p>{member.role}</p>
                                </div>
                                <div className='equal-width'>
                                    <span>Active</span>
                                    <button type="button" className="btn btn-outline-danger ms-5" onClick={() => deleteMember(member.email)}>Delete <i className="ms-1 fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </>
                    )
                })
            }                          

        </div>
                            

      </div>
        {/* This is the team component. */}
    </>
  )
}

export default Team

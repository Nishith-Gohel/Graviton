import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  // state variables using state hook
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  // to store value in browser's local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    let email = input.email, regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let len = input.password.length;
    if (input.name === "")
      alert("Please enter your name");

    else if (input.email === "")
      alert("Please enter your email");

    else if (!regex.test(email))
      alert("Please a VALID email");

    else if(input.password === "")
      alert("Please enter your password");

    else if (len < 8 || len > 15)
      alert("Please enter a password between length 8 and 15");
    // else{
    //     localStorage.setItem("user", JSON.stringify(input));
    //     navigate("/login");
    // }
    else {
      let users = JSON.parse(localStorage.getItem("user"));
      if (!users) {
        users = [];
        users.push(input);
        localStorage.setItem("user", JSON.stringify(users));
      }
      else {
        users.push(input);
        // console.log(users);
        localStorage.setItem("user", JSON.stringify(users));
      }
      navigate("/login");
    }
  }


  return (
    <>
      {/* <div style={{backgroundColor: "#b4f8de4f"}}> */}
      <div className='login-singup-rootDiv'>
        <div className='enclosing-div'></div>
        <main className="form-signin login-style">

          <form className='bringFront' onSubmit={handleSubmit}>
            <div className='text-center'>
              <img className="mb-4" src="Images and SVGs/Graviton Brand Logo.png" alt="" width="90" height="90" />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center">Create an account</h1>

            <div className="form-outline mx-auto w-25 m-3">
              <label htmlFor="username" className="form-label">Your Name <span className='required'>*</span></label>
              <input className="form-control" id="username" type="text"
                name='name'
                value={input.name}
                onChange={(event) =>
                  setInput({
                    ...input,
                    [event.target.name]: event.target.value
                  })
                }
              />
            </div>

            <div className="form-outline mx-auto field-style w-25 m-3">
              <label for="exampleInputEmail1" className="form-label">Email address <span className='required'>*</span></label>
              <input type="email" className="form-control" id="exampleInputEmail1"
                name='email'
                value={input.email}
                onChange={(event) =>
                  setInput({
                    ...input,
                    [event.target.name]: event.target.value
                  })
                }
              />
            </div>

            <div className="form-outline mx-auto w-25 m-3">
              <label for="exampleInputPassword1" className="form-label">Password <span className='required'>*</span></label>
              <input type="password" className="form-control" id="exampleInputPassword1"
                name='password'
                value={input.password}
                onChange={(event) =>
                  setInput({
                    ...input,
                    [event.target.name]: event.target.value
                  })
                }
              />
            </div>

            <div className='text-center'>
              <button type="submit" className="btn btn-primary">Register</button>
            </div>

            <p className='text-center my-5'> Already have an account ?
            <Link to="/login" className='fw-bold text-body'> <u>Login here</u> </Link>
            </p>
            
          </form>
        </main>
      </div>
    </>
  );
}

export default SignUp

import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        if (input.email === "")
            alert("Please enter your email");
        else if (input.password === "")
            alert("Please enter your password");

        // const loggedUser = JSON.parse(localStorage.getItem("user"));
        // console.log(loggedUser);
        // if(loggedUser === null)
        //     alert("User does not exist");
        // else if(input.email === loggedUser.email && input.password === loggedUser.password){
        //     localStorage.setItem("loggedin", true);
        //     navigate("/");
        // }
        // else
        //     alert("Wrong email or password");
        else {
            const users = JSON.parse(localStorage.getItem("user"));
            let obj = undefined;
            // console.log(users);
            for (let person in users) {
                if (users[person].email === input.email) {
                    obj = users[person];
                    break;
                }
            }
            if (obj === undefined) {
                alert("User does not exist");
            }
            else {
                if (obj.password === input.password) {
                    localStorage.setItem("loggedin", true);
                    localStorage.setItem("current", JSON.stringify(obj));
                    navigate("/");
                }
                else
                    alert("Please enter the correct password");
            }
        }

    }

    return (
        <>
            {/* <div style={{backgroundColor: "#b4f8de4f"}}> */}
            <div className='login-singup-rootDiv'>
                <div className='enclosing-div'></div>
                <main className="form-signin login-style">
                    
                    <form className='text-center bringFront' onSubmit={handleLogin}>
                        <img className="mb-4" src="Images and SVGs/Graviton Brand Logo.png" alt="" width="90" height="90" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating mx-auto w-25 mt-2">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                name="email"
                                value={input.email}
                                onChange={(event) =>
                                    setInput({
                                        ...input,
                                        [event.target.name]: event.target.value
                                    })
                                }
                            />
                            <label color='red' htmlFor="floatingInput">Email address <span className='required'>*</span></label>
                        </div>
                        <div className="form-floating mx-auto w-25 mt-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                name="password"
                                value={input.password}
                                onChange={(event) =>
                                    setInput({
                                        ...input,
                                        [event.target.name]: event.target.value
                                    })
                                }
                            />
                            <label htmlFor="floatingPassword">Password <span className='required'>*</span></label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>

                        <button className="btn btn-lg btn-primary mb-4 login-button" type="submit">Login</button>
                        
                        <p className='text-muted'>Don't have an account ? </p>
                        <Link className="nav-link" to="/signup">
                            <button type="button" class="btn btn-secondary">Sign-Up</button>
                        </Link>
                        <p className="mt-5 mb-3 text-bold">&copy; 2023 GRAVITON Productions Ltd.</p>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Login

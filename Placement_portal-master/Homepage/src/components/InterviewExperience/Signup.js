import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import "./style.css"
function Signup() {
  const navigate = useNavigate();

  const [newUser,setNewUser]=useState({
    name:"",
    email:"",
    password:"",
    role:"student",
  })

  function myFunction() {
    var x = document.getElementById("roleid").value;
    return x;
  }

  // These methods will update the state properties.
  function updateForm(value) {
    return setNewUser((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newRec = { ...newUser };
      await fetch("http://localhost:5000/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRec),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
      
      alert('User added successfully!')
      setNewUser({name:"",email:"",password:"",role:""});
      if(newUser.role==='alumini')
      navigate("/addexperience");
      else
      navigate("/interviewexperience");
  }
    
    return (
        <div className=" body text-center col d-flex justify-content-center">
            <div className="login-box">
        <div className="login-logo" >
          <h1 className="h3 mb-3 fw-normal">WCE Portal</h1>
        </div>
        <div className="card col d-flex justify-content-center">
            
          <main className="form-signin">
            <form onSubmit={onSubmit}>
              <div className="form-floating">
              <div className="input-group mb-3">
                  <input required type="text" className="form-control" name="name" placeholder="Name" onChange={(e)=>updateForm({name: e.target.value})}/> 
                </div>
              <div className="input-group mb-3">
                <input required type="email" className="form-control" name="email" placeholder="Email" onChange={(e)=>updateForm({email: e.target.value})}/> 
              </div>
              <div className="input-group mb-3">
                <input required type="password" className="form-control" name="password"  placeholder="Password" onChange={(e)=>updateForm({password: e.target.value})}/>
              </div>
              <div className="input-group mb-3">
                  <input required type="password" className="form-control" name="cpassword" placeholder="Confirm Password"/>
                </div>
                <div className="input-group mb-3">
                  Role: &nbsp;&nbsp;&nbsp;

                  <select required name="role" id="roleid" onChange={(e)=>updateForm({role: myFunction()})}>
                      <option value="student">Student</option>
                      <option value="alumini">Alumini</option>
                  </select>
                </div>
                <div>
                  {/* <Link to="/addExp"><button  type="submit" name="register" className="btn btn-primary register">Register</button></Link> */}
                  <button  type="submit" name="register" className="btn btn-primary register" >Register</button>
                  <br/>
                  <br/>
                  Read Experiences of Alumini:<br/>
                  {/* <a href="/login" className="btn btn-primary btn-block register">Login</a> */}
                  <Link to="/interviewexperience">Click Here</Link>
              </div>
              </div>
            </form>
          </main>
          </div>
        </div>
        </div>
    )
}

export default Signup
import React,{useState} from 'react'
import "./style.css"
import { useNavigate } from "react-router";
import { useEffect } from 'react';

function Login() {
  const navigate = useNavigate();
  const [newUser,setNewUser]=useState({
    email:"",
    password:"",
  })
  // These methods will update the state properties.
  function updateForm(value) {
    return setNewUser((prev) => {
      return { ...prev, ...value };
    });
  }

  useEffect(() => {
   async function fetchData(e) {
     const id = newUser.email.toString();
     const response = await fetch(`http://localhost:5000/user/${id}`);
 
      if (!response.ok) {
       const message = `An error has occured: ${response.statusText}`;
       window.alert(message);
       return;
      }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       return;
     }
    else
    {
      window.alert(record);
    }
    
  }
  fetchData();
 
   return;
 })
    return (
        <div className=" body text-center col d-flex justify-content-center login" >
            <div className="login-box">
            <div className="login-logo" >
              <h1 className=" mb-3 fw-normal">Log In</h1>
            </div>
              <div className="card">
              <div className="card-body login-card-body">
                <form onSubmit={fetchData} >
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" name="email" required placeholder="Email" />
                    <div className="input-group-append">
                      <div className="input-group-text" >
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div> 
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" name="password" required placeholder="Password"/>
                    <div className="input-group-append">
                      <div className="input-group-text" >
                        <span className="fas fa-lock" ></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        
                      </div>
                    </div> 
                    
                    <div className="col-4" >
                      <button align="right" type="submit" name="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                    
                  </div>
                </form>
              </div>
            
            </div>
          </div>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import "./style.css"

function AddExp() {

        const navigate = useNavigate();
      
        const [newExp,setNewExp]=useState({
            name: "",
            email: "",
            url: "",
            cname: "",
            jprofile: "",
            jlocation: "",
            type: "",
            procedure: "",
            way: "",
            oexp: "",
            advice: "",
            tips: ""
        })
      
        // These methods will update the state properties.
        function updateForm(value) {
          return setNewExp((prev) => {
            return { ...prev, ...value };
          });
        }
      
        async function onSubmit(e) {
          e.preventDefault();
        
          // When a post request is sent to the create url, we'll add a new record to the database.
          const newRec = { ...newExp };
        
          await fetch("http://localhost:5000/experience/add", {
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
          
          alert('Experience added successfully!')
          setNewExp({ name: "",email: "",url: "",cname: "",jprofile: "",jlocation: "",type: "",procedure: "",way: "",oexp: "",advice: "",tips: ""});
          navigate("/");
        }
          

    return (
        <div className=" body text-center col d-flex justify-content-center">
            <div className=" login-box" >
        <div>
        <h1 className="h3 mb-3 fw-normal">Add Your Experience</h1>
            </div>
                <div className="card col d-flex justify-content-center scroll">
                    <main className="form-signin">
                    <form onSubmit={onSubmit}>
                        <div className="form-floating " >
                            <div><br/><br/><br/><br/><br/><br/>
                                <div className="input-group mb-3">
                                    <input type="text" name="aname" id="" required placeholder="Name" onChange={(e)=>updateForm({name: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="aemail" id="" required placeholder="Email" onChange={(e)=>updateForm({email: e.target.value})} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="link" name="url" id="" required placeholder="Company Url" onChange={(e)=>updateForm({url: e.target.value})} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="cname" id="" required placeholder="Company Name" onChange={(e)=>updateForm({cname: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="jprofile" id="" required placeholder="Job Profile" onChange={(e)=>updateForm({jprofile: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="jlocation" id="" required placeholder="Job Location" onChange={(e)=>updateForm({jlocation: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="stype" id="" required placeholder="Selection Type" onChange={(e)=>updateForm({stype: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="sprocedure" id="" required placeholder="Selection Procedure" onChange={(e)=>updateForm({procedure: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textarea" name="way" placeholder="Way of Preparation" onChange={(e)=>updateForm({way: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textarea" name="oexp" id="" required placeholder="Overall Experience" onChange={(e)=>updateForm({oexp: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textarea" name="advice" id="" required placeholder="Advice for Company" onChange={(e)=>updateForm({advice: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textbox" name="tips" id="" required placeholder="Tips for preparation" onChange={(e)=>updateForm({tips: e.target.value})}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="submit" name="submit" value="Submit"/>
                                    </div>
                                
                                </div> 
                            </div>     
                    </form>
                </main>
                </div>
            </div>
        </div>
    )
}

export default AddExp

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Display() {
//const [records, setRecords] = useState([]);
const id = useParams();

useEffect(() => {
    async function fetchData() {
      //const id = newUser.email.toString();
      const response = await fetch(`http://localhost:5000/experience/${id}`);
  
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

      return(
        <div className=" body text-center col d-flex justify-content-center">
            <div className=" login-box" >
        <div>
        <h1 className="h3 mb-3 fw-normal">Experience of {id.name} </h1>
            </div>
                <div className="card col d-flex justify-content-center scroll">
                    <main className="form-signin">
                    <form >
                        <div className="form-floating " >
                            <div><br/><br/><br/><br/><br/><br/>
                                <div className="input-group mb-3">
                                    <input type="text" name="aname" id="" disabled placeholder={record.aname}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="aemail" id="" disabled placeholder="Email" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="link" name="url" id="" disabled placeholder="Company Url" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="cname" id="" disabled placeholder="Company Name"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="jprofile" id="" disabled placeholder="Job Profile" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="jlocation" id="" disabled placeholder="Job Location"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="stype" id="" disabled placeholder="Selection Type" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="sprocedure" id="" disabled placeholder="Selection Procedure" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textarea" name="way" disabled placeholder="Way of Preparation" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textarea" name="oexp" id="" disabled placeholder="Overall Experience" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textarea" name="advice" id="" disabled placeholder="Advice for Company" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="textbox" name="tips" id="" disabled placeholder="Tips for preparation" />
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

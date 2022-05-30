import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
 
export default function Experience() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/experience/`);
 
     if (!response.ok) {
       const message = `An error occured: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     console.log(records);
     setRecords(records);
   }
   getRecords();
 
   return;
 }, [records.length]);
 
 
 // This method will map out the records on the table
 function recordList() {

    if(records.length==0)
    return ('No Experiences');
    else
    {
      
      
      return records.map((record) => {
        
        return (
          <Col>
          <br/>
          <Card style={{ width: '40rem'}}>
          <Card.Body>
            <Card.Title>{record.cname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{record.aname}</Card.Subtitle>
            <Card.Text>
              {/* Company Url: {record.url} */}
              Job Profile: {record.jprofile}
          </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>Procedure: {record.procedure}</ListGroupItem>
          <ListGroupItem>Way of preparation: {record.way}</ListGroupItem>
          <ListGroupItem>Overall Experience: {record.oexp}</ListGroupItem>
          <ListGroupItem>Advice: {record.advice}</ListGroupItem>
          <ListGroupItem>Tips for Company: {record.tips}</ListGroupItem>
          </ListGroup>
        </Card>
        </Col>
        );
        
      });
      
      
    }
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="experience">
   <div className="recordTable">
     {/* <h3 style={{ textAlign:'left' }}>Company List</h3> */}
      <div className="row">
         <div className="">
         <Row xs={1} md={2} className="g-4">{recordList()}</Row>
          {/* <Table striped responsive hover bordered variant="secondary" style={{ marginTop: 20 ,overflow:'scroll'}} >
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table> */}
        </div>
      </div>
     
   </div>
   </div>
 );
}

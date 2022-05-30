const express = require("express");
const nodemailer = require("nodemailer");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// add new user
recordRoutes.route("/user/add").post(function(req,response){
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  }
  db_connect.collection("users").insertOne(myobj,function (err, res) {
    if (err) throw err;
    response.json(res);
  });
  //if(req.body.role=='student')
});

//to find particular user
recordRoutes.route("/user/:id").get(function(req,response){
   let db_connect = dbo.getDb();
   let myquery = { email: ObjectId( req.params.id )};
    db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result); 
      });
});

//to add experience
recordRoutes.route("/experience/add").post(function(req,response){
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    email: req.body.email,
    url:  req.body.url,
    cname:  req.body.cname,
    jprofile:  req.body.jprofile,
    jlocation:  req.body.jlocation,
    type:  req.body.type,
    procedure:  req.body.procedure,
    way:  req.body.way,
    oexp:  req.body.oexp,
    advice:  req.body.advice,
    tips:  req.body.tips,
  }
  db_connect.collection("experiences").insertOne(myobj,function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//fetch all experience
recordRoutes.route("/experience").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("experiences")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
    console.log('Response list fetched!');
});



































//response form     
// recordRoutes.route("/formresponse").post(function(req,resp){
//   let db_connect = dbo.getDb();
//   let respo = {
//     name: req.body.nm,
//     mail: req.body.email,
//     subject: req.body.subject,
//     msg: req.body.message,
//   }
//   db_connect.collection("response").insertOne(respo, function (err, res) {
//     if (err) throw err;
//     resp.json(res);
//     console.log('Response submitted!!')
//   });

// });

// recordRoutes.route("/responselist").get(function(req,res){
//   let db_connect = dbo.getDb();
//   db_connect
//     .collection("response")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//       console.log('Data fetched!!')
//     });
// })


///////nodemailer/////////

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

recordRoutes.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
 // const sub = req.body.subject;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: 'COntact form submission',
    html: `
          <p>This email is sent by ${email}<p>
          <p>Name: ${name}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: {error} });
    } else {
      res.json({ status: "Message Sent" });
      console.log('Email sent!!')
    }
  });
});


//////////Admin Login //////////
// recordRoutes.route("/login").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   db_connect
//     .collection("adminUsers")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
//     console.log('User list fetched!');
// });

// This section will help you get a list of all the records.
// recordRoutes.route("/record").get(function (req, res) {
//   let db_connect = dbo.getDb("employees");
//   db_connect
//     .collection("records")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
//     console.log('Response list fetched!');
// });

// This section will help you get a single record by id
recordRoutes.route("/display/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("experience")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result); 
      });
});

// This section will help you create a new record.
// recordRoutes.route("/record/add").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = {
//     event_date: req.body.date,
//     event_compName: req.body.compName,
//   };
//   db_connect.collection("records").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });




// This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   let newvalues = {
//     $set: {
//       event_date: req.body.date,
//       event_compName: req.body.compName,
//     },
//   };
//   db_connect
//     .collection("records")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       response.json(res);
//     });
// });

// This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     response.status(obj);
//   });
// });

module.exports = recordRoutes;
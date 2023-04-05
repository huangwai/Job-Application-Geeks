const express = require("express");
const app = express();
const mysql = require("mysql"); //enable mysql connection/usage
const cors = require("cors"); //parsing json objects
const dotenv = require("dotenv"); //hides all sensitive data
// dotenv.config({ path: "../.vars/.env" });

//enable modules here
app.use(cors()); //parsing
app.use(express.json()); //allows us to send any json from client

//database connection with mySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "login",
  password: "Likeaboss1!", //amazing password :)
  database: "job_app_geeks",
});

//check if connection works
db.connect(function (err) {
  if (err) throw err;
  console.log("MySQL database is connected!");
});

//USER AUTHENICATION

//APPLICATIONS ROUTES
//gets all job applications
//linked by http://localhost:3000/api/get
app.get("/application/all", (req, res) => {
  db.query("SELECT * FROM applications", (err, data) => {
    if (err) {
      res.json(err);
    } else {
      console.log("Returned All applications records");
      res.send(data);
      // console.log(data);
    }
  });
});

//creates a new job application to be added
app.post("/application/create", (req, res) => {
  const application = [
    req.body.company_name,
    req.body.stage,
    req.body.position,
    req.body.location,
    req.body.date_applied,
    req.body.link,
    req.body.userToken,
  ];

  //sql query
  const query =
    "INSERT INTO users (company_name, stage, position, location, date_applied, link, userToken) VALUES (?)";
  //operation to insert application into database
  db.query(query, [application], (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      console.log("Record Inserted");
      res.json(data);
    }
  });
});

//Delete job application
app.delete("/application/delete/:id", (req, res) => {
  const applicationID = req.params.id;
  const query = "DELETE FROM applications WHERE id = ?";

  db.query(query, [applicationID], (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log("Application has been deleted");
      res.json(data);
    }
  });
});

//Update a new Job Application

//listening on port 3001 :)
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

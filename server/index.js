const express = require("express");
const app = express();
const mysql = require("mysql"); //enable mysql connection/usage
const cors = require("cors"); //parsing json objects
const dotenv = require("dotenv"); //hides all sensitive data
dotenv.config({ path: "./.env" });

//enable modules here
app.use(cors()); //parsing
app.use(express.json()); //allows us to send any json from client

//database connection with mySQL
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD, //amazing password :)
  database: process.env.DATABASE,
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
      console.log(data);
    }
  });
});

//listening on port 3001 :)
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

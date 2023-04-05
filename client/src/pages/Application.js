import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "No.",
    description: " id number of job application",
    width: 70,
  },
  {
    field: "company_name",
    headerName: "Company Name",
    description: "Represents the Company Name applied to",
    width: 200,
  },
  {
    field: "stage",
    headerName: "Stage",
    description: "What stage in the process?",
    width: 130,
  },
  {
    field: "position",
    headerName: "Position",
    description: "Position applied for",
    width: 250,
  },
  {
    field: "location",
    headerName: "Location",
    description: "This job is located at.",
    width: 130,
  },
  {
    field: "date_applied",
    headerName: "Date Applied",
    description: "When the job application was submitted",
    width: 200,
  },
  {
    field: "link",
    headerName: "Link",
    description: "Link to job application",
    width: 600,
  },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
];

//front end stuff to display on client
const Application = () => {
  const [applications, setApplicatons] = useState([]);

  //fetches all application data when called
  const fetchAllApplications = async () => {
    const res = await axios.get("/application/all"); //fetch api
    // console.log(res.data);
    setApplicatons(res.data);
  };
  useEffect(() => {
    fetchAllApplications();
  }, []); //end of Application function
  return (
    <div
      style={{
        height: 1000,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Job Applications</h1>
      <DataGrid
        rows={applications}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default Application;

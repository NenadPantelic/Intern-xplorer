import React from "react";

const jobComponentWrapper = {
  display: "flex",
  boxShadow: "1px 3px 5px 1px gray",
  width: "60%",
  margin: "1rem auto",
  padding: "1rem",
};

export default function Job(prop) {
  const { company_name, title, job_type, url } = prop.details;
  return (
    <div style={jobComponentWrapper}>
      <div style={{ width: "10%" }}>
        <img src={url} width="100%" />
      </div>
      <div style={{ width: "90%", textAlign: "left", paddingLeft: "2rem" }}>
        <p style={{ fontSize: "16px" }}>{company_name}</p>
        <div>
          <h3>{title}</h3>
          <p style={{ fontSize: "16px" }}>{job_type}</p>
        </div>
      </div>
    </div>
  );
}

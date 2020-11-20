import React from "react";
import { Container, Button, Header, Search } from "semantic-ui-react";
import Job from "./Job";

export default function Resources() {
    return (
        <div style={resources}>
          <div style={{ width: "10%" }}>
            <img src={url} width="100%" />
          </div>
          <div style={{ width: "90%", textAlign: "left", paddingLeft: "2rem" }}>
            <p style={{ fontSize: "16px" }}>{Job.company_name}</p>
          </div>
          <h3>{title}</h3>
          <p style={{ fontSize: "16px" }}>{Job.job_type}</p>
        </div>
      );
}
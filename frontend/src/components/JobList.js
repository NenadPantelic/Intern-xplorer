import React from "react";
import { Grid } from "semantic-ui-react";

import JobListItem from "./JobListItem";
import { Link } from "react-router-dom";

const mock = require("../constants/mockdata.json");

export default function JobList() {
  return (
    <Grid columns={12} centered>
      <Grid.Column width={8}>
        <h2>Programming Jobs</h2>
        {mock.map((job) => (
          <Link to={"/job-posts/" + job.id}>
            <JobListItem
              title={job.title}
              jobType={job.job_type}
              company={job.company}
              time={job.time}
              img={job.img}
            />
          </Link>
        ))}
      </Grid.Column>
    </Grid>
  );
}

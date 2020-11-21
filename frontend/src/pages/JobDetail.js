import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { primaryColor } from "../constants/theme";

const mockData = require("../constants/mockdata.json");

const Wrapper = styled.div`
  margin-top: 40px;
  font-size: 18px;
  color: #212529;
`;

const Time = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  color: #4d5154;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Description = styled.p``;

const BackLink = styled.a`
  display: inline-block;
  font-size: 20px;
  color: ${primaryColor};
  font-weight: 700;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
    color: ${primaryColor};
    text-decoration: underline;
  }
`;

export default function JobDetail(props) {
  const { id } = useParams();

  const job = mockData.find((job) => job.id === Number(id));

  return (
    <div>
      <Navigation />
      <Grid columns={12} centered>
        <Grid.Column width={8}>
          <Wrapper>
            <BackLink onClick={() => props.history.goBack()}>
              Back to jobs
            </BackLink>
            <Time>POSTED {job.time}</Time>
            <Title>{job.title}</Title>
            <Description
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </Wrapper>
        </Grid.Column>
      </Grid>
    </div>
  );
}

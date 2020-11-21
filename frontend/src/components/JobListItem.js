import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(144, 146, 148, 0.2);
  padding: 18px 54px;
  margin-bottom: 18px;
`;

const Details = styled.div`
  color: black;
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 2rem;
`;

const Time = styled.div`
  font-size: 18px;
  color: black;
`;

const Company = styled.div`
  font-size: 18px;
  margin-bottom: 6px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const JobType = styled.div`
  font-size: 18px;
  margin-bottom: 6px;
`;

export default function JobListItem({ company, title, jobType, time, img }) {
  return (
    <Wrapper>
      <DetailsWrapper>
        <Logo src={img} />
        <Details>
          <Company>{company}</Company>
          <Title>{title}</Title>
          <JobType>{jobType}</JobType>
        </Details>
      </DetailsWrapper>
      <Time>{time}</Time>
    </Wrapper>
  );
}

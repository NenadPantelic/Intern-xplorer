import React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import Input from "../components/Input";
import Button from "../components/Button";
import SearchIcon from "../assets/loupe.svg";

const HeroHeader = styled.h1`
  font-size: 28px;
  width: 800px;
  text-align: center;
`;

const SearchWrapper = styled.div``;

const SearchInput = styled(Input)`
  width: 75%;
  margin-right: 2rem;
`;

const SearchButton = styled(Button)`
  padding: 1rem !important;

  & > img {
    width: 16px;
  }
`;

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero>
        <HeroHeader>
          Intern xplorer is a work community that helps undergraduates and
          graduates that internship opportunities around the world
        </HeroHeader>
      </Hero>
      <Grid columns={12} centered>
        <Grid.Column width={8}>
          <SearchWrapper>
            <SearchInput name="search" />
            <SearchButton>
              <img src={SearchIcon} width={16} alt="icon" />
            </SearchButton>
          </SearchWrapper>
        </Grid.Column>
      </Grid>
      <JobList />
    </div>
  );
}

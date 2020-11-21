import React from "react";
import { Grid } from "semantic-ui-react";
import Button from "../components/Button";
import Input, { InputWrapper } from "../components/Input";
import InputLabel from "../components/InputLabel";
import Form from "../components/Form";
import useForm from "../hooks/useForm";
import jobApi from "../api/job";
import { useAuth } from "../state/contexts/AuthProvider";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import {
  HOW_TO_APPLY_OPTIONS,
  JOB_TYPE_OPTIONS,
  CATEGORY_OPTIONS,
} from "../constants/options";
import styled from "styled-components";
import { primaryColor } from "../constants/theme";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const FormHeader = styled.h1`
  color: ${primaryColor};
  font-size: 28px !important;
  margin-bottom: 2rem;
`;

const HeroHeader = styled.h1`
  font-size: 28px;
`;

const gotoPath = (path) => {
  window.location.pathname = path
}

const NewJob = () => {
  const { form, handleInput } = useForm();
  const { token } = useAuth();

  const submitJob = async () => {
    try {
      await jobApi.submitJob(form, token);
      gotoPath("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navigation />
      <Hero>
        <HeroHeader>Reach the largest remote community on the web</HeroHeader>
      </Hero>
      <Grid columns={12} centered>
        <Grid.Column width={8}>
          <Form size="large">
            <FormHeader>Tell us about the position</FormHeader>
            <InputWrapper>
              <InputLabel htmlFor="job-title">Job Title</InputLabel>
              <Input id="job-title" name="title" onChange={handleInput} />
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="job-description">Job Description</InputLabel>
              <TextArea
                id="job-description"
                name="description"
                onChange={handleInput}
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="job-how-to-apply">How To Apply</InputLabel>
              <Select
                id="job-how-to-apply"
                name="how_to_apply"
                onChange={handleInput}
              >
                {HOW_TO_APPLY_OPTIONS.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </Select>
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="job-email">Email</InputLabel>
              <Input
                id="job-email"
                name="email"
                onChange={handleInput}
                type="email"
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="job-url">Application Url</InputLabel>
              <Input
                id="job-url"
                name="url"
                onChange={handleInput}
                type="url"
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="job-type">Job Type</InputLabel>
              <Select id="job-job-type" name="job_type" onChange={handleInput}>
                {JOB_TYPE_OPTIONS.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </Select>
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="job-category">Category</InputLabel>
              <Select
                id="job-category"
                name="job_category"
                onChange={handleInput}
              >
                {CATEGORY_OPTIONS.map((option) => (
                  <option value={option}>{option}</option>
                ))}
                <option>Promgamming</option>
              </Select>
            </InputWrapper>
            <Button onClick={submitJob}>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default NewJob;

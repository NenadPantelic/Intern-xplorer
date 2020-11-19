import React from "react";
import { Container, Button, Header, Search } from "semantic-ui-react";
import Navigation from "./Navigation";
import Job from './Job'


const apiResult = [
  {
    company: "Major League Hacking",
    title: "Frontend Developer",
    jobType: "REMOTE/NEW YORK",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Developer",
    jobType: "Full time",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time/REMOTE",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time/Internship",
    src:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
];

const containerStyle = {
  position: "absolute",
  width: "70%",
  top: "30%",
  left: "15%",
}

const jobListStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "4rem auto",
}

const footerContainerStyle = {
  display: "flex",
  backgroundColor: "#212529",
  color: "white",
  padding: "5rem 7rem",
  justifyContent: "center"
}


export default function Dashboard() {
  return (
    <div>
      <Navigation />
      <div style={{ height: "90vh", backgroundColor: "#212529" }}>
        <container
          text
          style={containerStyle}
        >
          <Header
            content="Intern Explorer"
            inverted
            style={{
              fontWeight: "normal",
              marginBottom: 0,
              fontSize: "4em",
            }}
          />
          <Header
            content="Do whatever you want when you want"
            inverted
            style={{
              fontWeight: "normal",
              fontSize: "1.5em",
              marginBottom: "2em",
            }}
          />
          <a href="#job-list">
            <Button size="big">Get Started</Button>
          </a>
        </container>
      </div>
      <div
        id="job-list"
        style={jobListStyle}
      >
        <h2>
          Programming Jobs{" "}
          <span style={{ fontSize: "19px", color: "red" }}>
            Latest Job about 2hours ago
          </span>
        </h2>
        <Search />
      </div>
      {apiResult.map((job) => (
        <Job details={job} />
      ))}
      <div
        style={footerContainerStyle}
      >
        <div style={{ width: "50%", textAlign: "left" }}>
          <h1>LAND YOUR DREAM JOB!</h1>
          <p>
            We strongly encourage employers to embrace diversity, equity, and
            inclusion as fundamental values when hiring through We Work
            Remotely.
          </p>
          <p style={{ color: "#f03e3e", fontSize: "1.5em" }}>Get in Touch </p>
        </div>
        <div style={{ width: "30%", textAlign: "right" }}>
          <h1>2310</h1>
          <p>Fresh Remote Jobs Posted.</p>
          <button className="button">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}

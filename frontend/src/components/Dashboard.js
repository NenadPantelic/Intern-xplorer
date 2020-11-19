import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Header } from "semantic-ui-react";
import Navigation from "./Navigation";
import recruitment_image from "../assets/recruitment_bg_image.jpg";

const apiResult = [
  {
    company: "Major League Hacking",
    title: "Frontend Developer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Developer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "Software Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  },
  {
    company: "Major League Hacking",
    title: "DevOps Engineer",
    jobType: "Full time",
    src: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
  }
];

function Job(prop) {
  const { company, title, jobType, src } = prop.details;
  return (
    <div style={{display: "flex", boxShadow: "1px 3px 5px 1px gray", width: "60%", margin: "1rem auto", padding: "1rem"}}>
      <div style={{width: "10%"}}>
        <img src={src} width="100%" />
      </div>
      <div style={{width: "90%", textAlign: "left", paddingLeft: "2rem"}}>
        <p style={{fontSize: "16px"}}>{company}</p>
        <div>
          <h3>{title}</h3>
          <p style={{fontSize: "16px"}}>{jobType}</p>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div>
      <Navigation />
      <div style={{ height: "90vh" }}>
        <img width="100%" height="100%" src={recruitment_image} />
        <container
          text
          style={{
            position: "absolute",
            width: "70%",
            top: "30%",
            left: "20%",
          }}
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
          <Link to="/signup">
            <Button primary size="big">
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button size="big">Login</Button>
          </Link>
        </container>
      </div>
      {apiResult.map((job) => (
        <Job details={job} />
      ))}
    </div>
  );
}

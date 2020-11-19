import React from "react";
import {
  Container,
  Button,
  Header,
} from "semantic-ui-react";
import Navigation from "./Navigation";
import recruitment_image from "../assets/recruitment_bg_image.jpg";

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
          <Button primary size="big">
            Sign Up
          </Button>
          <Button size="big">Login</Button>
        </container>
      </div>
    </div>
  );
}

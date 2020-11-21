import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import authApi from "../api/auth";
import { useAuth } from "../state/contexts/AuthProvider";
import { gotoPath } from "../utils";
import useForm from "../hooks/useForm";

const LoginForm = () => {
  const { form, handleInput } = useForm();
  const { setToken } = useAuth();

  const loginUser = async () => {
    if (!form.firstName && !form.password) return;

    try {
      const { token } = await authApi.login(form);
      setToken(token);
      gotoPath("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              onChange={handleInput}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleInput}
            />

            <Button color="teal" fluid size="large" onClick={loginUser}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/signup">Sign Up</a>
        </Message>
        <p>
          <a href="/"> Home</a>
        </p>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;

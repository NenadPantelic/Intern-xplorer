import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const SignupForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Create a new account with us!
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input icon='user' iconPosition='left' placeholder='First Name' />
          <Form.Input icon='user' iconPosition='left' placeholder='Last Name' />
          <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already Have an account? <a href='/login'>Login</a>
      </Message>
      <p>
        <a href='/'>Home</a>
      </p>
    </Grid.Column>
  </Grid>
)

export default SignupForm
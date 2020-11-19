import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Menu secondary style={{backgroundColor:"#343a40", margin: "0", padding: "0 4em"}}>
          <Menu.Item as='h2' style={{color: "white"}}
            name='Intern-Xplore'
          />
          <Menu.Item as='h2' style={{color: "white"}}
            name='Job Seekers'
          />
          
          <Menu.Menu position='right'>
            <Link to="/signup">            
            <Menu.Item as='h3' style={{color: "white"}}
              name='Sign up'
            />
            </Link>
            <Link to="/login">
            <Menu.Item as='h3' style={{color: "white"}}
              name='Sign In'
            />
            </Link>
          </Menu.Menu>
        </Menu>
      )
}


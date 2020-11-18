import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default function Navigation() {
    return (
        <Menu secondary style={{backgroundColor:"#343a40", color: "red"}}>
          <Menu.Item as='h2' style={{color: "white"}}
            name='Intern-Xplore'
          />
          <Menu.Item as='h2' style={{color: "white"}}
            name='Job Seekers'
          />
          
          <Menu.Menu position='right'>            
            <Menu.Item as='h3' style={{color: "white"}}
              name='Sign up'
            />
            <Menu.Item as='h3' style={{color: "white"}}
              name='Sign In'
            />
          </Menu.Menu>
        </Menu>
      )
}


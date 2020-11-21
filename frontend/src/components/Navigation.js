import React from "react";
import { Menu } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { useAuth } from "../state/contexts/AuthProvider";
import styled from "styled-components";
import Button from "./Button";

const Nav = styled(Menu)`
  padding: 10px 60px;
  border: 0px !important;
  box-shadow: none !important;
  margin-bottom: 0 !important;
`;

const MenuLogo = styled(Link)`
  font-family: inherit;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  color: black;
  font-size: 24px;
  font-weight: 700;
`;

const MenuItem = styled.h3`
  display: flex !important;
  align-items: center !important;
  color: black !important;
  font-weight: inherit !important;
  height: 100% !important;
  margin-right: 1rem !important;
`;

export default function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <Nav>
      <MenuLogo to="/">Intern Xplorer</MenuLogo>
      <Menu.Menu position="right">
        <Link to="/login">
          <MenuItem>Sign in</MenuItem>
        </Link>
        {isAuthenticated && (
          <Link to="/post-job">
            <Button>Post a Job</Button>
          </Link>
        )}
      </Menu.Menu>
    </Nav>
  );
}

import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { primaryColor } from "../constants/theme";

export default styled(Button)`
  background-color: ${primaryColor} !important;
  color: white !important;
  padding: 16px 30px !important;
  font-family: inherit !important;
  font-size: 18px !important;
  border-radius: 2px !important;
`;

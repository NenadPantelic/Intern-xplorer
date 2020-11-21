import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  background-color: #f8f9fa;
  margin-bottom: 4rem;
`;

const Hero = ({ children }) => {
  return <HeroWrapper>{children}</HeroWrapper>;
};

export default Hero;

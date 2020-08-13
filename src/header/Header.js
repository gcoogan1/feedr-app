import React from "react";
import styled from "styled-components";
import './header.css'


const Heading = styled.div`
  width: 100%;
  height: ${({ small }) => (small ? "233px" : "100vh")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const Header = ({ children, small }) => {
  return <Heading className="hero" small={small}>{children}</Heading>;
};

export default Header;

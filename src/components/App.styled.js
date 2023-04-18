import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  max-width: 1200px;
  height: 50px;
  margin: 0 auto;

  padding: 0 30px;

  background-color: #008080;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavItem = styled(NavLink)`
  color: white;
  font-family: Montserrat;

  font-size: 20px;

  svg {
    color: orange;
  }

  &.active {
    color: orange;
  }
  :hover {
    color: red;
    svg {
      color: red;
    }
  }
`;

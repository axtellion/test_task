import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  font-family: Montserrat;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  text-decoration: none;
  gap: 10px;

  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  background-color: #00bfff;

  border: none;
  border-radius: 10px;

  :hover {
    color: red;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

import { NavItem } from "./BtnBack.styled";
import { GoArrowLeft } from "react-icons/go";

export const BtnBack = ({ to, title }) => {
  return (
    <NavItem to={to}>
      <GoArrowLeft />
      <p>{title}</p>
    </NavItem>
  );
};

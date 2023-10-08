import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  position: fixed;
  background-color: ${(props) => props.bgColor};
  min-height: 90vh;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25px;
  background-color: ${(props) => props.isActive};
  cursor: pointer;
  outline: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.textColor};
`;

export const TextItem = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: "Roboto";
  margin-left: 8px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;
export const BottomText = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: "Roboto";
  color: ${(props) => props.textColor};
`;
export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const IconImage = styled.img`
  width: 30px;
  margin-right: 6px;
`;
export const BottomItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto";
  color: ${(props) => props.textColor};
`;

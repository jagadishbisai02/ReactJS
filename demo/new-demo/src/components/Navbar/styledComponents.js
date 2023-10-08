import { styled } from "styled-components";

export const NavbarHead = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: ${props => props.bgColor};
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  color: ${props => props.color};
  cursor: pointer;
  outline: none;
`;

export const ButtonContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Profile = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export const LogoutIcon = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${props => props.btnColor};
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 767px){
    display: none;
  }
`;

export const ConfirmButton = styled.button`
  background: none;
  border: 1px solid #1409e6;
  font-size: 15px;
  color: #1409e6;
  font-family: "Roboto";
  border-radius: 3px;
  padding: 5px 12px;
  cursor: pointer;
  outline: none;
`;
export const CloseButton = styled.button`
  background: none;
  border: 1px solid #f70505;
  font-size: 15px;
  color: #f70505;
  font-family: "Roboto";
  border-radius: 3px;
  padding: 5px 12px;
  cursor: pointer;
  outline: none;
`;

export const ModalContainer = styled.div`
  background-color: #abbdc4;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 150px;
  padding: 20px;
  border-radius: 8px;
`;

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const AlignRow = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ModalDesc = styled.p`
  color: #000000;
  font-size: 18px;
  font-family: "Roboto";
`;

export const LogoutBtn = styled.button`
  background: none;
  border: 1px solid ${props => props.btnColor};
  border-radius: 5px;
  color: ${props => props.btnColor};
  font-size: 18px;
  font-family: "Roboto";
  padding: 8px 19px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

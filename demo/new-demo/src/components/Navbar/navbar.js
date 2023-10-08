import { Link, withRouter } from "react-router-dom";
import { BiSun, BiSolidMoon } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import CartContext from "../../context/CartContext";
import Cookies from "js-cookie";
import Popup from "reactjs-popup";

import {
  NavbarHead,
  Logo,
  ButtonContainer,
  ThemeButton,
  Profile,
  ModalContainer,
  AlignColumn,
  ModalDesc,
  AlignRow,
  CloseButton,
  ConfirmButton,
  LogoutBtn,
  LogoutIcon,
} from "./styledComponents";

const Navbar = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { isDarkTheme, onChangeTheme } = value;

      const onToggleTheme = () => {
        onChangeTheme();
      };

      const onLogout = () => {
        const { history } = props;
        Cookies.remove("jwt_token");
        history.replace("/login");
      };

      const bgColor = isDarkTheme ? "#332d2d" : "#f9f9f9";
      const color = isDarkTheme ? '#f9f9f9' : '#0f0f0f'
      const btnColor = isDarkTheme ? '#f9f9f9' : '#03befc'
      const websiteLogo = isDarkTheme
        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png";

      return (
        <NavbarHead bgColor={bgColor}>
          <Link to="/">
            <Logo src={websiteLogo} alt="website logo" />
          </Link>
          <ButtonContainer>
            <ThemeButton onClick={onToggleTheme} color={color}>
              {isDarkTheme ? <BiSun size={25} /> : <BiSolidMoon size={25} />}
            </ThemeButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <div>
                  <LogoutBtn type="button" btnColor={btnColor}>Logout</LogoutBtn>
                  <LogoutIcon btnColor={btnColor}>
                    <FiLogOut size={25} />
                  </LogoutIcon>
                </div>
              }
            >
              {(close) => (
                <ModalContainer>
                  <AlignColumn>
                    <ModalDesc>Are you sure, you want to logout</ModalDesc>
                    <AlignRow>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onLogout}>
                        Confirm
                      </ConfirmButton>
                    </AlignRow>
                  </AlignColumn>
                </ModalContainer>
              )}
            </Popup>
          </ButtonContainer>
        </NavbarHead>
      );
    }}
  </CartContext.Consumer>
);

export default withRouter(Navbar);

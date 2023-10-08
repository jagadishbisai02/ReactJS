import CartContext from "../../context/CartContext";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { CgPlayListAdd } from "react-icons/cg";

import {
  SideBarContainer,
  NavLink,
  TextItemContainer,
  TextItem,
  NavbarContent,
  BottomContainer,
  BottomText,
  IconsContainer,
  IconImage,
  BottomItemText,
} from "./styledComponents";

const SideBar = () => (
  <CartContext.Consumer>
    {(value) => {
      const { isDarkTheme, activeTab, activeTabItem } = value;

      console.log(activeTab);

      const onClickHome = () => {
        activeTabItem("Home");
      };

      const onClickTrending = () => {
        activeTabItem("Trending");
      };

      const onClickGaming = () => {
        activeTabItem("Gaming");
      };

      const onClickSavedVideo = () => {
        activeTabItem("SavedVideo");
      };

      const bgColor = isDarkTheme ? "#332d2d" : "#f9f9f9";
      const textColor = isDarkTheme ? "#f9f9f9" : "#0f0f0f";
      const activeTabBgColor = isDarkTheme ? "#475569" : "#cbd5e1";

      return (
        <SideBarContainer bgColor={bgColor}>
          <NavbarContent>
            <NavLink to="/" textColor={textColor}>
              <TextItemContainer
                key="home"
                isActive={activeTab === "Home" ? activeTabBgColor : "none"}
                onClick={onClickHome}
              >
                <AiFillHome
                  size={25}
                  color={activeTab === "Home" ? "#ff0000" : "#909090"}
                />
                <TextItem>Home</TextItem>
              </TextItemContainer>
            </NavLink>
            <NavLink to="/trending" textColor={textColor}>
              <TextItemContainer
                key="trending"
                isActive={activeTab === "Trending" ? activeTabBgColor : "none"}
                onClick={onClickTrending}
              >
                <AiFillFire
                  size={25}
                  color={activeTab === "Trending" ? "#ff0000" : "#909090"}
                />
                <TextItem>Trending</TextItem>
              </TextItemContainer>
            </NavLink>
            <NavLink to="/gaming" textColor={textColor}>
              <TextItemContainer
                key="gaming"
                isActive={activeTab === "Gaming" ? activeTabBgColor : "none"}
                onClick={onClickGaming}
              >
                <SiYoutubegaming
                  size={25}
                  color={activeTab === "Gaming" ? "#ff0000" : "#909090"}
                />
                <TextItem>Gaming</TextItem>
              </TextItemContainer>
            </NavLink>
            <NavLink to="/saved-videos" textColor={textColor}>
              <TextItemContainer
                key="saved-videos"
                isActive={
                  activeTab === "SavedVideo" ? activeTabBgColor : "none"
                }
                onClick={onClickSavedVideo}
              >
                <CgPlayListAdd
                  size={25}
                  color={activeTab === "SavedVideo" ? "#ff0000" : "#909090"}
                />
                <TextItem>Saved Videos</TextItem>
              </TextItemContainer>
            </NavLink>
          </NavbarContent>
          <BottomContainer>
                <BottomText textColor={textColor}>CONTACT US</BottomText>
                <IconsContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <BottomItemText textColor={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </BottomItemText>
              </BottomContainer>
        </SideBarContainer>
      );
    }}
  </CartContext.Consumer>
);

export default SideBar;

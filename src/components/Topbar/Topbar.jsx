import { useEffect, useRef } from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Logo,
  SearchBar,
  Input,
  LinkContainer,
  IconContainer,
  StyledLink,
  NavLink,
  Dropdown,
  DropdownList,
  DropdownItem,
} from "./Topbar.styled";
import {
  Person,
  Search,
  Chat,
  Notifications,
  Logout,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Avatar } from "..";
import { Link } from "react-router-dom";

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user.currentUser);
  const avatarEl = useRef();
  const dropdownEl = useRef();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleAvatarMouseOver = () => {
    dropdownEl.current.style.opacity = "1";
    dropdownEl.current.style.transform = "translateY(10px)";
    dropdownEl.current.style.pointerEvents = "auto";
  };
  const handleDropdownMouseleave = () => {
    console.log("mouseleave");
    dropdownEl.current.style.opacity = "0";
    dropdownEl.current.style.transform = "translateY(-10px)";
    dropdownEl.current.style.pointerEvents = "none";
  };

  useEffect(() => {
    dropdownEl.current.addEventListener("mouseleave", handleDropdownMouseleave);
    return () => {
      dropdownEl.current.removeEventListener(
        "mouseleave",
        handleDropdownMouseleave
      );
    };
  }, []);

  useEffect(() => {
    avatarEl.current.addEventListener("mouseover", handleAvatarMouseOver);

    return () => {
      avatarEl.current.removeEventListener("mouseover", handleAvatarMouseOver);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo>weConnect</Logo>
          </StyledLink>
        </Left>
        <Center>
          <SearchBar>
            <Search sx={{ fontSize: "20px", color: "gray" }} />
            <Input placeholder="Search for a friend, post or video" />
          </SearchBar>
        </Center>
        <Right>
          <IconContainer>
            <Badge
              badgeContent={4}
              color="badgeColor"
              sx={{
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              <Person />
            </Badge>
            <Badge
              badgeContent={4}
              color="badgeColor"
              sx={{ marginRight: "20px", cursor: "pointer" }}
            >
              <Chat />
            </Badge>
            <Badge
              badgeContent={4}
              color="badgeColor"
              sx={{ marginRight: "20px", cursor: "pointer" }}
            >
              <Notifications />
            </Badge>
          </IconContainer>
          <StyledLink
            to={`/profile/${user?._id}`}
            ref={avatarEl}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Avatar src={user?.profilePicture} />
          </StyledLink>
          <Dropdown ref={dropdownEl}>
            <DropdownList>
              <StyledLink color="red" to="/">
                <DropdownItem>Home</DropdownItem>
              </StyledLink>
              <StyledLink color="blue" to={`/profile/${user._id}`}>
                <DropdownItem>Profile</DropdownItem>
              </StyledLink>
              <DropdownItem onClick={handleLogout}>
                Logout
                <Logout
                  sx={{ cursor: "pointer", margin: "0 10px", fontSize: "15px" }}
                  onClick={handleLogout}
                />
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;

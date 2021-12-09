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

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo>SocialMedia</Logo>
          </StyledLink>
        </Left>
        <Center>
          <SearchBar>
            <Search sx={{ fontSize: "20px", color: "gray" }} />
            <Input placeholder="Search for a friend, post or video" />
          </SearchBar>
        </Center>
        <Right>
          <LinkContainer>
            <StyledLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <NavLink>Home</NavLink>
            </StyledLink>
            <StyledLink
              to={`/profile/${user?._id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <NavLink>Profile</NavLink>
            </StyledLink>
          </LinkContainer>
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Avatar src={user?.profilePicture} />
          </StyledLink>
          <Logout sx={{ cursor: "pointer" }} onClick={handleLogout} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;

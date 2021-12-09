import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  ButtonList,
  ButtonListItem,
  ButtonListItemText,
  ShowButton,
  Hr,
  FriendList,
} from "./Sidebar.styled";
import {
  RssFeed,
  Chat,
  Videocam,
  Groups,
  Bookmark,
  Help,
  Work,
  EmojiEvents,
  School,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Users } from "../../dummyData";
import { CloseFriendListItem } from "..";
import axios from "../../axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [followingsList, setFollowingsList] = useState([]);
  const isFetching = useSelector((state) => state.user.isFetching);
  useEffect(async () => {
    const res = await axios.get(`/users/${currentUser._id}/followings`);
    setFollowingsList(res.data);
  }, [currentUser, isFetching]);
  return (
    <Container>
      <Wrapper>
        <ButtonList>
          <ButtonListItem>
            <RssFeed />
            <ButtonListItemText>Feed</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <Chat />
            <ButtonListItemText>Chats</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <Videocam />
            <ButtonListItemText>Videos</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <Groups />
            <ButtonListItemText>Groups</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <Bookmark />
            <ButtonListItemText>Bookmarks</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <Help />
            <ButtonListItemText>Questions</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <Work />
            <ButtonListItemText>Jobs</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <EmojiEvents />
            <ButtonListItemText>Events</ButtonListItemText>
          </ButtonListItem>
          <ButtonListItem>
            <School />
            <ButtonListItemText>Courses</ButtonListItemText>
          </ButtonListItem>
        </ButtonList>
        <ShowButton>Show More..</ShowButton>
        <Hr />
        <FriendList>
          {followingsList.map((user) => {
            return (
              <Link
                to={`/profile/${user._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CloseFriendListItem key={user.id} {...user} />
              </Link>
            );
          })}
        </FriendList>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

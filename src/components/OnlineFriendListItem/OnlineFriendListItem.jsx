import React from "react";
import {
  Container,
  FriendImageContainer,
  OnlineStatus,
  FriendName,
} from "./OnlineFriendListItem.styled";
import { Avatar } from "..";
const OnlineFriendListItem = ({ profilePicture, fullname }) => {
  return (
    <Container>
      <FriendImageContainer>
        <Avatar src={profilePicture} />
        <OnlineStatus></OnlineStatus>
      </FriendImageContainer>
      <FriendName>{fullname}</FriendName>
    </Container>
  );
};

export default OnlineFriendListItem;

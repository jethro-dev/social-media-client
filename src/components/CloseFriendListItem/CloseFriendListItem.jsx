import React from "react";
import {
  Container,
  FriendImageContainer,
  OnlineStatus,
  FriendName,
} from "./CloseFriendListItem.styled";
import { Avatar } from "..";

const CloseFriendListItem = ({ profilePicture, fullname }) => {
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

export default CloseFriendListItem;

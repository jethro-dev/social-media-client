import { useState, useEffect } from "react";
import {
  Container,
  ContainerNoFixed,
  Wrapper,
  BirthdayContainer,
  BirthdayImage,
  BirthdayText,
  AdvertisementTitle,
  Advertisement,
  FriendListTitle,
  FriendList,
  UserInfoTitle,
  UserInfoList,
  UserInfoListItem,
  InfoItemKey,
  InfoItemValue,
  FriendContainer,
  FriendInfo,
  FriendImage,
  FriendName,
} from "./Rightbar.styled";
import { Avatar } from "@mui/material";
import { Users } from "../../dummyData";
import { OnlineFriendListItem } from "../";
import { useSelector } from "react-redux";
import axios from "../../axios";
import { Link } from "react-router-dom";

const Rightbar = ({ currentProfileUser }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [followingsList, setFollowingsList] = useState([]);
  const isFetching = useSelector((state) => state.user.isFetching);

  useEffect(async () => {
    const res = currentProfileUser
      ? await axios.get(`/users/${currentProfileUser._id}/followings`)
      : await axios.get(`/users/${currentUser._id}/followings`);
    setFollowingsList(res.data);
  }, [currentProfileUser, currentUser, isFetching]);

  const HomeRightbar = () => {
    return (
      <Container>
        <Wrapper>
          <BirthdayContainer>
            <BirthdayImage src="/assets/gift.png" alt="gift" />
            <BirthdayText>
              <b>Peter Parker</b> and <b>3 other friends</b> have a birthday
              today
            </BirthdayText>
          </BirthdayContainer>
          <AdvertisementTitle>Advertisement:</AdvertisementTitle>
          <Advertisement src="/assets/ad.jpg" alt="ad" />
          <FriendListTitle>Followings</FriendListTitle>
          <FriendList>
            {followingsList.map((user) => {
              return (
                <Link
                  key={user._id}
                  to={`/profile/${user._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <OnlineFriendListItem {...user} />
                </Link>
              );
            })}
          </FriendList>
        </Wrapper>
      </Container>
    );
  };

  const ProfileRightbar = () => {
    return (
      <ContainerNoFixed>
        <Wrapper>
          <UserInfoTitle>User Information</UserInfoTitle>
          <UserInfoList>
            {currentProfileUser?.city && (
              <UserInfoListItem>
                <InfoItemKey>City: </InfoItemKey>
                <InfoItemValue>{currentProfileUser?.city}</InfoItemValue>
              </UserInfoListItem>
            )}

            {currentProfileUser?.relationship && (
              <UserInfoListItem>
                <InfoItemKey>Relationship: </InfoItemKey>
                <InfoItemValue>
                  {currentProfileUser?.relationship}
                </InfoItemValue>
              </UserInfoListItem>
            )}
            {currentProfileUser?.followers && (
              <UserInfoListItem>
                <InfoItemKey>Followers: </InfoItemKey>
                <InfoItemValue>
                  {currentProfileUser?.followers.length}
                </InfoItemValue>
              </UserInfoListItem>
            )}
          </UserInfoList>
          <FriendListTitle>
            Followings ({followingsList.length})
          </FriendListTitle>
          <FriendContainer>
            {followingsList.map((user) => {
              return (
                <FriendInfo key={user?.id}>
                  <Link to={`/profile/${user._id}`}>
                    <FriendImage
                      src={
                        user?.profilePicture ||
                        "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg"
                      }
                      alt={user?.fullname}
                    />
                  </Link>
                  <FriendName>{user?.fullname}</FriendName>
                </FriendInfo>
              );
            })}
          </FriendContainer>
        </Wrapper>
      </ContainerNoFixed>
    );
  };

  return currentProfileUser ? ProfileRightbar() : HomeRightbar();
};

export default Rightbar;

import React, { useState, useEffect } from "react";
import { Feed, Rightbar } from "../../components";
import {
  Container,
  Wrapper,
  Top,
  Bottom,
  CoverImage,
  ProfileImage,
  ProfileCover,
  ProfileInfo,
  Username,
  Description,
  EditButton,
  EditText,
  FollowButton,
  FollowText,
} from "./Profile.styled";
import axios from "../../axios";
import { useParams } from "react-router";
import { Settings, Add, Done } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Avatar } from "../../components";
import { follow } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [currentProfileUser, setCurrentProfileUser] = useState({});
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentProfileUserId = useParams().userId;
  const [isFollowed, setIsFollowed] = useState(
    useSelector((state) =>
      state.user.currentUser.followings.includes(currentProfileUserId)
    )
  );
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.user.isFetching);

  useEffect(() => {
    setIsFollowed(currentUser.followings.includes(currentProfileUserId));
  }, [currentUser, currentProfileUserId, isFetching]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${currentProfileUserId}`);
      setCurrentProfileUser(res.data);
    };
    fetchUser();
  }, [currentProfileUserId, isFetching]);

  const handleClick = async () => {
    console.log("handle click");
    try {
      await follow(dispatch, currentProfileUserId, currentUser._id);
      setIsFollowed(!isFollowed);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(isFollowed);
  return (
    <Container>
      <Top>
        <ProfileCover>
          <CoverImage
            src={
              currentProfileUser?.coverPicture ||
              "https://tokystorage.s3.amazonaws.com/images/default-cover.png"
            }
            alt=""
          />
          <Avatar src={currentProfileUser?.profilePicture} profile border />
          {currentProfileUserId === currentUser._id && (
            <EditButton to={`/edit/${currentUser.id}`}>
              <EditText>Edit</EditText>
              <Settings fontSize="small" />
            </EditButton>
          )}
          {currentProfileUserId !== currentUser._id && (
            <FollowButton onClick={handleClick} isFollowed={isFollowed}>
              <FollowText isFollowed={isFollowed}>
                {isFollowed ? "Followed" : "Follow"}
              </FollowText>
              {isFollowed ? (
                <Done
                  fontSize="small"
                  sx={{ color: isFollowed ? "#2a2a2a" : "white" }}
                />
              ) : (
                <Add
                  fontSize="small"
                  sx={{ color: isFollowed ? "#2a2a2a" : "white" }}
                />
              )}
            </FollowButton>
          )}
        </ProfileCover>
        <ProfileInfo>
          <Username>{currentProfileUser?.fullname}</Username>
          <Description>{currentProfileUser?.desc}</Description>
        </ProfileInfo>
      </Top>
      <Bottom>
        <Feed type="profile" currentProfileUser={currentProfileUser} />
        <Rightbar currentProfileUser={currentProfileUser} />
      </Bottom>
    </Container>
  );
};

export default Profile;

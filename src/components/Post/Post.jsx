import React, { useState, useEffect } from "react";
import { Avatar } from "..";
import { MoreVert, FavoriteBorder, Favorite } from "@mui/icons-material";
import {
  Container,
  Wrapper,
  Top,
  Mid,
  Bottom,
  TopLeft,
  TopRight,
  Username,
  PostDate,
  IconCircle,
  PostText,
  PostImage,
  BottomLeft,
  BottomRight,
  LikeCounter,
  LikeCircle,
  PostCommentText,
  PostInfo,
} from "./Post.styled";
import axios from "../../axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = ({ _id, desc, img, createdAt, userId, likes, comment }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [currentPostUser, setCurrentPostUser] = useState();
  const [postLike, setPostLike] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(likes.includes(user._id));

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${userId}`);
      setCurrentPostUser(res.data);
    };
    fetchUser();
  }, [userId]);

  const handleClick = () => {
    try {
      axios.put(`/posts/${_id}/like`, { userId: user._id });
    } catch (err) {
      console.log(err);
    }
    setPostLike(isLiked ? postLike - 1 : postLike + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Container>
      <Wrapper>
        <IconCircle>
          <MoreVert />
        </IconCircle>
        <Top>
          <TopLeft>
            <Link to={`/profile/${currentPostUser?._id}`}>
              <Avatar src={currentPostUser?.profilePicture} medium />
            </Link>
            <PostInfo>
              <Username>{currentPostUser?.fullname}</Username>
              <PostDate>{format(createdAt)}</PostDate>
            </PostInfo>
          </TopLeft>
        </Top>
        <Mid>
          <PostText>{desc}</PostText>
          <PostImage src={img} />
        </Mid>
        <Bottom>
          <BottomLeft>
            <LikeCircle onClick={handleClick}>
              {isLiked ? (
                <Favorite sx={{ color: "red" }} />
              ) : (
                <FavoriteBorder />
              )}
            </LikeCircle>
            <LikeCounter>
              {/* {postLike > 1
                ? isLiked
                  ? `You and ${postLike - 1} others like the post`
                  : `${postLike} others like the post`
                : isLiked
                ? "You like the post"
                : ""} */}
              {`${postLike} people like the post`}
            </LikeCounter>
          </BottomLeft>
          <BottomRight>
            <PostCommentText>{comment || 0} comments</PostCommentText>
          </BottomRight>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Post;

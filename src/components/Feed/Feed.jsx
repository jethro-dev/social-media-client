import { useState, useEffect } from "react";
import { Container, Wrapper } from "./Feed.styled";
import { Share, Post } from "../";
import axios from "../../axios";
import { useSelector } from "react-redux";

const Feed = ({ type, currentProfileUser }) => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchPosts = async () => {
      const res =
        type === "profile"
          ? await axios.get(`/posts/profile/${currentProfileUser._id}`)
          : await axios.get(`/posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [currentProfileUser]);

  return (
    <Container>
      <Wrapper>
        {type === "home" && <Share />}
        {type === "profile" && currentProfileUser._id === user._id && <Share />}
        {posts.map((post) => {
          return <Post key={post._id} {...post} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Feed;

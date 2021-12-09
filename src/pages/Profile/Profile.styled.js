import { Avatar } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #fff;
`;
export const Wrapper = styled.div`
  padding: 20px 80px;
`;

export const Top = styled.div`
  border-bottom: 1px solid #e6e6e6;
  border-radius: 10px;
  padding-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 10;
  position: relative;
`;

export const ProfileCover = styled.div`
  height: 320px;
  position: relative;
`;

export const ProfileInfo = styled.div`
  text-align: center;
`;

export const Username = styled.h4`
  font-weight: 500;
  font-size: 24px;
  margin: 5px 0;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  margin: 10px 0;
  max-width: 500px;
  margin: 0 auto;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const Bottom = styled.div`
  display: flex;
`;

export const EditButton = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #505050;
`;

export const EditText = styled.span`
  margin: 0 5px;
  font-weight: 300;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
export const FollowButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 25px;
  border: none;
  outline: none;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isFollowed }) => (isFollowed ? "#e6e6e6" : "#667fff")};
  border-radius: 5px;
  transition: all 200ms ease-in-out;
`;

export const FollowText = styled.span`
  color: ${({ isFollowed }) => (isFollowed ? "#505050" : "white")};
  margin: 0 5px;
  font-weight: 500;
  font-size: 15px;
`;

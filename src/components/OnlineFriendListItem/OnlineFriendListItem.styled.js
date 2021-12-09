import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 8px 10px;
  border-radius: 10px;
  transition: 200ms all ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const FriendImageContainer = styled.div`
  margin-right: 10px;
  position: relative;
`;

export const OnlineStatus = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  bottom: 0;
  right: -3px;
  border: 2px solid white;
`;

export const FriendName = styled.span`
  font-weight: 400;
  font-size: 15px;
`;

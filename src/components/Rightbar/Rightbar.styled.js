import styled from "styled-components";

export const Container = styled.div`
  min-width: 250px;
  width: 25%;
  background-color: white;
  height: calc(100vh - 60px);
  overflow-y: auto;
  position: sticky;
  top: 60px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bebebe;
    border-radius: 15px;
  }
`;

export const ContainerNoFixed = styled.div`
  min-width: 250px;
  width: 25%;
  background-color: white;
`;

export const Wrapper = styled.div`
  padding: 20px 10px;
`;

export const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const BirthdayImage = styled.img`
  height: 30px;
  margin-right: 10px;
`;

export const BirthdayText = styled.span`
  font-weight: 400;
  font-size: 15px;
`;

export const AdvertisementTitle = styled.h1`
  font-weight: 300;
  font-size: 15px;
`;

export const Advertisement = styled.img`
  width: 100%;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const FriendListTitle = styled.h4``;

export const FriendList = styled.ul`
  list-style: none;
`;

export const UserInfoTitle = styled.h4``;

export const UserInfoList = styled.ul`
  list-style: none;
  margin-bottom: 50px;
`;
export const UserInfoListItem = styled.li`
  margin: 10px 0;
  color: #2a2a2a;
`;

export const InfoItemKey = styled.span``;

export const InfoItemValue = styled.span`
  margin: 0 10px;
`;
export const FriendContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
`;
export const FriendInfo = styled.div`
  width: 100px;
  margin: 3px;
  cursor: pointer;
  text-overflow: ellipsis;
`;
export const FriendImage = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }
`;
export const FriendName = styled.p`
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  transition: all 200ms ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

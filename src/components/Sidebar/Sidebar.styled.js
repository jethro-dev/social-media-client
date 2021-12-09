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
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bebebe;
    border-radius: 15px;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 10px;
`;

export const ButtonList = styled.ul`
  list-style: none;
`;

export const ButtonListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 10px;
  margin-bottom: 5px;
  border-radius: 7px;
  transition: 200ms all ease-in-out;
  cursor: pointer;
  color: #252525;
  &:hover {
    background-color: #e0e0e0;
  }
`;
export const ButtonListItemText = styled.span`
  margin-left: 15px;
`;
export const ShowButton = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  margin: 0 auto;
  cursor: pointer;
  background-color: #ececec;
  transition: 200ms all ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Hr = styled.p`
  margin: 15px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const FriendList = styled.ul`
  list-style: none;
`;

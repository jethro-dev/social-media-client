import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 25px 0;
`;

export const Wrapper = styled.div`
  padding: 20px 25px;
  position: relative;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PostInfo = styled.div`
  margin-left: 10px;
`;

export const Username = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 2px 0;
`;

export const PostDate = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: gray;
`;

export const TopRight = styled.div``;

export const IconCircle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 200ms all ease-in-out;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const Mid = styled.div`
  margin: 15px 0;
`;

export const PostText = styled.span`
  padding: 7px 0;
  display: block;
`;

export const PostImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2px;
`;
export const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: -5px;
`;

export const LikeCircle = styled.div`
  border-radius: 50%;
  display: grid;
  place-items: center;
  height: 35px;
  width: 35px;
  cursor: pointer;
  transition: 200ms all ease-in-out;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const LikeCounter = styled.span`
  margin: 0 2px;
  font-weight: 400;
  font-size: 15px;
`;
export const BottomRight = styled.div``;

export const PostCommentText = styled.span`
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
  transition: all 200ms ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

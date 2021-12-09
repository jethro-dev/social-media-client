import styled from "styled-components";

export const LargeImage = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  border: ${({ border }) => border && " 2px solid white"};
  cursor: pointer;
  transition: 200ms all ease-in-out;
  border-radius: 50%;
  object-fit: cover;
  &:hover {
    filter: brightness(0.85);
  }
`;
export const SmallImage = styled.img`
  width: 45px;
  height: 45px;
  border: ${({ border }) => border && " 2px solid white"};
  cursor: pointer;
  transition: 200ms all ease-in-out;
  border-radius: 50%;
  object-fit: cover;
  &:hover {
    filter: brightness(0.85);
  }
`;
export const MediumImage = styled.img`
  width: 55px;
  height: 55px;
  border: ${({ border }) => border && " 2px solid white"};
  cursor: pointer;
  transition: 200ms all ease-in-out;
  border-radius: 50%;
  object-fit: cover;
  &:hover {
    filter: brightness(0.85);
  }
`;

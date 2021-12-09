import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Wrapper = styled.div`
  padding: 20px;
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  height: 60px;
  transition: 500ms all ease-in-out;
`;

export const Input = styled.textarea`
  flex: 1;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bebebe;
    border-radius: 15px;
  }
`;

export const Hr = styled.p`
  border-bottom: 1px solid #e0e0e0;
  margin: 10px 0;
`;
export const Bottom = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ShareOptions = styled.div`
  display: flex;
  align-items: center;
`;
export const ShareOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 7px 10px;
  transition: all 200ms ease-in-out;
  &:not(:last-child) {
    margin-right: 5px;
  }

  &:hover {
    background-color: #e6e6e6;
  }
`;
export const ShareOptionText = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`;
export const ShareButton = styled.button`
  border: none;
  outline: none;
  padding: 6px 10px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ShareButtonText = styled.span`
  margin-left: 5px;
  font-weight: 500;
  cursor: pointer;
`;

export const ShareImageContainer = styled.div`
  position: relative;
  padding: 10px;
`;

export const ShareImage = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #667fff;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;
export const Left = styled.div`
  flex: 3;
`;
export const Center = styled.div`
  flex: 5;
`;
export const Right = styled.div`
  margin-left: 20px;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;
export const Logo = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: all ease-in-out 200ms;
  &:hover {
    color: #e0e0e0;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 35px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 25px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0 5px;
  font-size: 15px;
`;

export const LinkContainer = styled.div``;

export const NavLink = styled.span`
  margin-right: 20px;
  font-size: 16px;
  cursor: pointer;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    transition: all ease-in-out 200ms;
    &:hover {
      color: #e0e0e0;
    }
  }
`;

export const Dropdown = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 60px;
  opacity: 0;
  transition: 200ms all ease-in-out;
  transform: translateY(-10px);
  padding: 10px;
  pointer-events: none;
`;
export const DropdownList = styled.ul`
  list-style: none;
  width: 200px;
`;
export const DropdownItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  color: #2a2a2a;
  border-radius: 5px;
  transition: 200ms all ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e6e6e6;
  }
`;

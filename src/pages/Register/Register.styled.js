import styled from "styled-components";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
  display: grid;
  place-items: center;
  min-height: 800px;
`;
export const Wrapper = styled.div`
  background-color: #fff;
  padding: 50px;
  width: 90%;
  height: 70%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Left = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Right = styled.div`
  height: 100%;
  flex: 3;
`;
export const Logo = styled.h3`
  font-size: 50px;
  font-weight: 800;
  color: #667fff;
  letter-spacing: 2px;
  margin: 5px;
  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const Desc = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 10px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const CompanyName = styled.h1`
  display: none;
  color: #667fff;
  text-align: center;
  font-size: 28px;
  margin: 20px 0;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Form = styled.form`
  height: 100%;
  border: 1px solid #e6e6e6;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  outline: none;
  font-size: 15px;
  padding: 10px;
`;
export const CreateButton = styled.button`
  border: none;
  background-color: #64ca5d;
  color: white;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 200ms ease-in-out;
  display: grid;
  place-items: center;
  text-decoration: none;
  &:hover {
    background-color: #e0e0e0;
    color: gray;
  }
`;
export const Label = styled.label`
  margin: 10px 0;
  cursor: pointer;
  font-size: 15px;
`;

export const StyledDatePicker = styled(DatePicker)`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  outline: none;
  font-size: 15px;
  padding: 10px;
  width: 100%;
`;

export const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 300;
  font-size: 14px;
  margin: 5px 0;
`;

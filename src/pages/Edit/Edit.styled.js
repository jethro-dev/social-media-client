import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding: 20px;
  background-color: #f3f3f3;
`;

export const Form = styled.form`
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  border-radius: 5px;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const FormLeft = styled.div`
  flex: 1;
`;

export const FormRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const FormRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 300;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px 5px;
  outline: none;
  border: 1px solid #e6e6e6;
  font-size: 15px;
`;
export const TextArea = styled.textarea`
  padding: 10px 5px;
  outline: none;
  border: 1px solid #e6e6e6;
  font-size: 15px;
  resize: none;
`;

export const Select = styled.select`
  padding: 10px 5px;
  border: 1px solid #e6e6e6;
`;

export const Option = styled.option`
  padding: 50px;
`;

export const UpdateButton = styled.button`
  border: none;
  outline: none;
  padding: 5px 10px;
  color: white;
  background-color: #667fff;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 18px;
  font-weight: 300;
  margin: 10px 0;

  &:hover {
    color: gray;
    background-color: #e6e6e6;
  }
`;

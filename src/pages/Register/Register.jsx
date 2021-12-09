import React, { useRef, useState } from "react";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  Desc,
  Form,
  Input,
  CreateButton,
  InputContainer,
  Label,
  CompanyName,
  FormTitle,
  InputRow,
  ErrorMessage,
} from "./Register.styled";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const Register = () => {
  const fullname = useRef();
  const email = useRef();

  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !username.current.value ||
      !fullname.current.value ||
      !email.current.value ||
      !password.current.value ||
      !confirmPassword.current.value
    ) {
      setErrorMessage("Please fill in all the fields");
      return;
    }

    if (password.current.value !== confirmPassword.current.value) {
      setErrorMessage("Passwords dont match. Please try again.");
    } else {
      const newUserObj = {
        fullname: fullname.current.value,
        email: email.current.value,
        username: username.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", newUserObj);
        navigate("/login", { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>SocialMedia</Logo>
          <Desc>Connect with friends and the world around you.</Desc>
        </Left>
        <Right>
          <Form onSubmit={handleSubmit}>
            <div>
              <CompanyName>SocialMedia</CompanyName>
              <FormTitle>Register</FormTitle>
              <InputContainer>
                <InputRow>
                  <Label htmlFor="fullname">Full Name:</Label>
                  <Input
                    type="fullname"
                    id="fullname"
                    placeholder="Full Name"
                    ref={fullname}
                  />
                </InputRow>
                <InputRow>
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    type="text"
                    id="email"
                    placeholder="Email"
                    ref={email}
                  />
                </InputRow>
                <InputRow>
                  <Label htmlFor="username">Username:</Label>
                  <Input
                    type="username"
                    id="username"
                    placeholder="Username"
                    ref={username}
                  />
                </InputRow>
                <InputRow>
                  <Label htmlFor="password">Password:</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    ref={password}
                  />
                </InputRow>
                <InputRow>
                  <Label htmlFor="confirmPassword">Confirm Password:</Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    ref={confirmPassword}
                  />
                </InputRow>
              </InputContainer>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </div>
            <CreateButton type="submit">Create an account</CreateButton>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Register;

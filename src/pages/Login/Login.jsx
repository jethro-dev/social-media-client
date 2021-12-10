import React, { useRef } from "react";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  Desc,
  Form,
  Input,
  LoginButton,
  ForgotPwText,
  CreateButton,
  InputContainer,
  Label,
  CompanyName,
  LoadingContainer,
  ErrorMessage,
} from "./Login.styled";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import HashLoader from "react-spinners/HashLoader";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, {
      username: username.current.value,
      password: password.current.value,
    });
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>weConnect</Logo>
          <Desc>Connect with friends and the world around you.</Desc>
        </Left>
        <Right>
          <Form onSubmit={handleSubmit}>
            {isFetching ? (
              <LoadingContainer>
                <HashLoader color="#667fff" loading={isFetching} size={80} />
              </LoadingContainer>
            ) : (
              <InputContainer>
                <CompanyName>SocialMedia</CompanyName>
                <Label htmlFor="username">Username:</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="username"
                  ref={username}
                />
                <Label htmlFor="password">Password:</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="password"
                  ref={password}
                />
                <ForgotPwText>Forgot password?</ForgotPwText>
                {error && (
                  <ErrorMessage>Incorrect username or password.</ErrorMessage>
                )}
                <LoginButton type="submit">Login</LoginButton>
              </InputContainer>
            )}
            <CreateButton to="/register">
              {isFetching ? (
                <CircularProgress color="secondary" sx={{ padding: "10px" }} />
              ) : (
                "Create an account"
              )}
            </CreateButton>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Login;

import React from "react";
import {
  Container,
  Form,
  FormHeader,
  FormTitle,
  FormContent,
  FormLeft,
  FormRight,
  FormRightWrapper,
  InputRow,
  Input,
  Label,
  Select,
  Option,
  TextArea,
  UpdateButton,
} from "./Edit.styled";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Edit = () => {
  const user = useSelector((state) => state.user.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormHeader>
          <FormTitle>Edit Profile</FormTitle>
          <UpdateButton type="submit">Update</UpdateButton>
        </FormHeader>
        <FormContent>
          <FormLeft>
            <InputRow>
              <Label htmlFor="fullname">Full Name:</Label>
              <Input type="text" id="fullname" placeholder={user?.fullname} />
            </InputRow>
            <InputRow>
              <Label htmlFor="description">Description:</Label>
              <TextArea
                type="text"
                id="fullname"
                placeholder={user?.desc}
                rows={6}
              />
            </InputRow>
            <InputRow>
              <Label htmlFor="city">City:</Label>
              <Input type="text" id="fullname" placeholder={user?.desc} />
            </InputRow>
            <InputRow>
              <Label htmlFor="relationship">Relationship:</Label>
              <Select id="relationship" defaultValue="">
                <Option disabled></Option>
                <Option value="Single">Single</Option>
                <Option value="Married">Married</Option>
                <Option value="Complicated">Complicated</Option>
              </Select>
            </InputRow>
            <InputRow>
              <Label htmlFor="gender">Gender:</Label>
              <Select id="gender" defaultValue="">
                <Option></Option>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Others">Others</Option>
              </Select>
            </InputRow>
            <InputRow>
              <Label htmlFor="coverPicture">Cover Image:</Label>
              <Input type="file" id="coverPicture" />
            </InputRow>
          </FormLeft>
          <FormRight>
            <FormRightWrapper>
              <Avatar
                sx={{ height: "200px", width: "200px", margin: "50px 0 20px" }}
              />
              <Label htmlFor="profilePicture">Edit</Label>
              <Input
                id="profilePicture"
                type="file"
                style={{ display: "none" }}
              />
            </FormRightWrapper>
          </FormRight>
        </FormContent>
      </Form>
    </Container>
  );
};

export default Edit;

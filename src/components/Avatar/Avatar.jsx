import { borderColor } from "@mui/system";
import React from "react";
import { LargeImage, SmallImage, MediumImage } from "./Avatar.styled";

const defaultImage =
  "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg";

const Avatar = ({ src, alt, profile, medium, border }) => {
  if (profile) {
    return <LargeImage src={src || defaultImage} alt={alt} border={border} />;
  }
  if (medium) {
    return <MediumImage src={src || defaultImage} alt={alt} border={border} />;
  }
  return <SmallImage src={src || defaultImage} alt={alt} border={border} />;
};

export default Avatar;

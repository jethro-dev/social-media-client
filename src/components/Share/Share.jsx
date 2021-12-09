import { useEffect, useRef, useState } from "react";
import { Avatar } from "..";
import {
  Container,
  Wrapper,
  Top,
  Bottom,
  Input,
  Hr,
  ShareOptions,
  ShareOption,
  ShareOptionText,
  ShareButton,
  ShareButtonText,
  ShareImageContainer,
  ShareImage,
} from "./Share.styled";
import {
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
  Reply,
  Cancel,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const Share = () => {
  const user = useSelector((state) => state.user.currentUser);
  const containerEl = useRef();
  const topEl = useRef();
  const descInput = useRef();
  const [file, setFile] = useState(null);

  useEffect(() => {
    containerEl.current.addEventListener("focusin", (e) => {
      if (topEl.current) {
        topEl.current.style.height = "300px";
      }
    });
    containerEl.current.addEventListener("focusout", (e) => {
      if (topEl.current) {
        topEl.current.style.height = "60px";
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (descInput.current.value || file) {
      try {
        if (file) {
          const storageRef = ref(
            storage,
            `/files/${new Date().getTime() + file.name}`
          );
          const uploadTask = uploadBytesResumable(storageRef, file);

          await uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              console.log(error);
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then(
                async (downloadImageURL) => {
                  await axios.post("/posts", {
                    userId: user._id,
                    desc: descInput.current.value,
                    img: downloadImageURL,
                  });
                  window.location.reload();
                }
              );
            }
          );
        } else {
          try {
            await axios.post("/posts", {
              userId: user._id,
              desc: descInput.current.value,
            });
            window.location.reload();
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container ref={containerEl}>
      <Wrapper>
        <Top ref={topEl}>
          <Link to={`/profile/${user?._id}`}>
            <Avatar src={user.profilePicture} medium />
          </Link>
          <Input placeholder="What's in your mind?" ref={descInput} />
        </Top>

        <Hr />

        {file && (
          <ShareImageContainer>
            <ShareImage src={URL.createObjectURL(file)} alt="" />
            <Cancel
              fontSize="large"
              sx={{
                position: "absolute",
                top: "15px",
                right: "15px",
                cursor: "pointer",
                color: "white",
                opacity: "0.8",
                transition: "200ms ease-in-out all",
                "&:hover": {
                  opacity: "1",
                },
              }}
              onClick={() => setFile(null)}
            />
          </ShareImageContainer>
        )}

        <Bottom onSubmit={handleSubmit}>
          <ShareOptions>
            <ShareOption htmlFor="file">
              <PermMedia fontSize="small" htmlColor="#E15930" />
              <ShareOptionText>Photo</ShareOptionText>
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </ShareOption>
            <ShareOption>
              <Label fontSize="small" htmlColor="#667fff" />
              <ShareOptionText>Tag</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <Room fontSize="small" htmlColor="#41D14E" />
              <ShareOptionText>Location</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <EmojiEmotions fontSize="small" htmlColor="#F3D500 " />
              <ShareOptionText>Feelings</ShareOptionText>
            </ShareOption>
          </ShareOptions>
          <ShareButton type="submit">
            <Reply />
            <ShareButtonText>Share</ShareButtonText>
          </ShareButton>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Share;

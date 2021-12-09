import { Container, Content } from "./Home.styled";
import { Feed, Rightbar } from "../../components";
const Home = () => {
  return (
    <Container>
      <Feed type="home" />
      <Rightbar />
    </Container>
  );
};

export default Home;

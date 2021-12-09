import { useEffect } from "react";
import { Home, Profile, Login, Register, Edit } from "./pages";
import { Container, Content } from "./App.styled";
import { Topbar, Sidebar, Feed, Rightbar } from "./components";
import {} from "./";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import { useSelector } from "react-redux";

const AppLayout = () => {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};

const LoginLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={user ? <AppLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="edit/:userId" element={<Edit />} />
        </Route>
        <Route path="/" element={<LoginLayout />}>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

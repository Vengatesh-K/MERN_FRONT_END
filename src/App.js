import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";

import store from "./redux/store";
import { Provider } from "react-redux";
import Profile from "./pages/profile";
import NotFoundPage from "./pages/noPageFound";
import EditProfile from "./pages/editUser";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editProfile" element={<EditProfile />} />

            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;

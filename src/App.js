import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";

import store from "./redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Profile from "./pages/profile";
import NotFoundPage from "./pages/noPageFound";
import EditProfile from "./pages/editUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "./components/authToken/authToken";
import { useEffect, useState } from "react";
import { fetchAuthTokenSuccess } from "./redux/actions";
import { useAuthToken } from "./customHooks/useAuthToken";

function App() {
  // const [authToken, setAuthToken] = useState();

  // Get initial token
  // const isLoggedIn = useSelector(
  //   (state) => state?.user?.tokenReducer?.authToken
  // );

  // const dispatch = useDispatch();

  const [authToken, setAuthToken] = useState(getToken());

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     let token = getToken();

  //     setAuthToken(token);

  //     console.log(token, "tttttttttt");

  //     window.addEventListener("storage", handleStorageChange);
  //   };

  //   return () => {
  //     // Cleanup function
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, [authToken]);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     console.log(newData, "nnnnnnnnnnnnnnnn"); // Parse if JSON-formatted
  //     const newData = localStorage.getItem("authToken"); // Replace 'yourKey' with your actual key
  //     if (newData) {
  //     }
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  console.log(authToken, "AuthToken for App 🐍🐍🐍");

  return (
    <>
      <Provider store={store}>
        <ToastContainer />

        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {authToken && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editProfile" element={<EditProfile />} />
              </>
            )}

            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;

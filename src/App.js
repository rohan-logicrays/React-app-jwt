import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import LogIn from "./components/LogIn";
import { Provider } from "react-redux";
import store from "./store/store";
import { UserData } from "./components/UserData";
import { useState } from "react";
import { DashBoard } from "./components/DashBoard";

function App() {
  const [profileData, setProfileData] = useState([]);
  const getAllData = () => {
    axios.get("http://localhost:3000/getUser").then((response) => {
      setProfileData(response.data);
    });
  };
  const [id, setId] = useState("");
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <Profile
                  setId={setId}
                  profileData={profileData}
                  getAllData={getAllData}
                />
              }
            />
            <Route
              path={`profile/userdata/${id}`}
              element={
                <UserData
                  id={id}
                  profileData={profileData}
                  getAllData={getAllData}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <DashBoard
                  setId={setId}
                  profileData={profileData}
                  getAllData={getAllData}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

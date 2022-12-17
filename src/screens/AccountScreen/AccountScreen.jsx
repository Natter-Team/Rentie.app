import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import Login from "./Login";
import Register from "./Register";
import ProfileInformation from "./ProfileInformation";

const AccountScreen = (props) => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // useEffect(() => {
  //   console.log(isLoginPage);
  // }, [isLoginPage]);

  return (
    <Background>
      {isUserLoggedIn ? (
        <ProfileInformation props={props} setLogin={setIsUserLoggedIn} />
      ) : isLoginPage ? (
        <Login set={setIsUserLoggedIn} set2={setIsLoginPage} props={props} />
      ) : (
        <Register set2={setIsLoginPage} props={props} />
      )}
    </Background>
  );
};

export default AccountScreen;

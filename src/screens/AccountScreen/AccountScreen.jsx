import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import Login from "./Login";
import Register from "./Register";

const AccountScreen = (props) => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    console.log(isLoginPage);
  }, [isLoginPage]);

  return (
    <Background>
      {isUserLoggedIn ? (
        <Text>Zalogowany</Text>
      ) : isLoginPage ? (
        <Login set={setIsUserLoggedIn} set2={setIsLoginPage} />
      ) : (
        <Register set2={setIsLoginPage} />
      )}
    </Background>
  );
};

export default AccountScreen;

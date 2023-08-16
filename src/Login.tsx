//@ts-nocheck
import React, { useEffect, useState } from "react";
import useAuthentication from "./hooks/useAuthentication";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import ChatGPT from "./ChatGPT";
import { Typography } from "@mui/material";

const Login = () => {
  const { setUser, user } = useAuthentication();

  const logOut = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <ChatGPT />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <>
          <Typography variant="h3">
            Log in to access the Enhanced version of ChatGPT
          </Typography>
          <Typography variant="h6">
            If you have not asked for access, you will not be able to use the
            tool because that API costs $$$. Feel free to reach out to Anna to
            get added to the list.{" "}
          </Typography>
          <GoogleLogin
            onSuccess={(data) => setUser(jwt_decode(data.credential))}
            onError={(m) => console.log("error", m)}
          />
        </>
      )}
    </div>
  );
};

export default Login;

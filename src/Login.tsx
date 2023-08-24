//@ts-nocheck
import React from "react";
import useAuthentication from "./hooks/useAuthentication";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import ChatGPT from "./ChatGPT";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

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
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <Grid container p={3} spacing={1}>
          <Grid p={1}>
            <Typography variant="h1" textAlign="center" width="100%">
              Login to access the preview version of ChatGPT
            </Typography>
          </Grid>

          <Grid p={1}>
            <Typography variant="h2">
              The OpenAI API releases features before they are available for the
              publicaly accessable{" "}
              <a
                href="https://chat.openai.com/auth/login?next=%2F"
                target="_blank"
                rel="noreferrer"
              >
                ChatGPT application.
              </a>{" "}
              This private preview exposes the new features and will be updated
              as new features are developed.
            </Typography>
          </Grid>
          <Grid p={1}>
            <Typography variant="h2">
              If you have not asked for access, you will not be able to use the
              tool because it is using my ChatGPT API. Feel free to reach out to
              Anna to get added to the list.
            </Typography>
          </Grid>
          <Grid p={1} width="100%" display="flex" justifyContent="center">
            <GoogleLogin
              onSuccess={(data) => setUser(jwt_decode(data.credential))}
              onError={(m) => console.log("error", m)}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Login;

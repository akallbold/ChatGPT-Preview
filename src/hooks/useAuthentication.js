import { useEffect, useState } from "react";

const allowedUsers = process.env.REACT_APP_ALLOWED_USERS;

function useAuthentication() {
  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState(true);

  // useEffect(() => {
  //   if (!allowedUsers)
  //     alert(
  //       "Please set the REACT_APP_ALLOWED_USERS environment variable in the .env file"
  //     );
  //   if (user && allowedUsers) {
  //     if (allowedUsers.includes(user.email)) {
  //       setAuthenticated(true);
  //     } else {
  //       alert("You are not allowed to access this site. Email Anna for access");
  //     }
  //   }
  // }, [user]);

  return {
    authenticated,
    setAuthenticated,
    user,
    setUser,
  };
}

export default useAuthentication;

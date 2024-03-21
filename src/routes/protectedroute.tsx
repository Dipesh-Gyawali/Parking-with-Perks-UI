import { Navigate, Outlet } from "react-router";

import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const ProtectedRoute = () => {
  //   const isAuthenticated = true;
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        console.log(user, "protectedaxxxxxxxxxxxxxxx");
      } else {
        setIsAuth(false);
        console.log(user, "protectedbxxxxxxxxxxxxxxx");
      }
    });

    return unsubscribe;
  }, []);

  return isAuth ? <Navigate to="/"></Navigate> : <Outlet></Outlet>;
};

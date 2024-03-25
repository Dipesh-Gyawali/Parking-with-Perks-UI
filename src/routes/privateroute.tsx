import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
// @ts-ignore

import { auth } from "../firebase/config";

export const PrivateRoute = () => {
  // const isAuthenticated = true;
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        setIsAuth(true);
        console.log(user, "privateaxxxxxxxxxxxxxxx");
      } else {
        setIsAuth(false);
        console.log(user, "privatebxxxxxxxxxxxxxxx");
      }
    });

    return unsubscribe;
  }, []);

  return isAuth ? <Outlet></Outlet> : <Navigate to="/login" />;
};
